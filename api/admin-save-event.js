const GITHUB_OWNER = "milomiranda";
const CONTENT_REPO = "diamantina-content"; // public repo, just for event data + flyers
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
};

async function getFile(path) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${CONTENT_REPO}/contents/${path}`;
  const res = await fetch(url, { headers });
  if (res.status === 404) return { exists: false, content: null, sha: null };
  if (!res.ok) throw new Error(`Could not read ${path} (${res.status})`);
  const data = await res.json();
  return { exists: true, content: Buffer.from(data.content, "base64").toString("utf-8"), sha: data.sha };
}

async function putFile(path, contentBase64, sha, message) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${CONTENT_REPO}/contents/${path}`;
  const body = { message, content: contentBase64 };
  if (sha) body.sha = sha;
  const res = await fetch(url, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Could not save ${path} (${res.status}): ${errText}`);
  }
  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password, action, eventId, event, imageBase64, imageFilename } = req.body || {};

  if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  if (action === "delete") {
    if (!eventId) return res.status(400).json({ error: "Missing event id" });
    try {
      const eventsFile = await getFile("events.json");
      const data = eventsFile.exists ? JSON.parse(eventsFile.content) : { events: [] };
      data.events = (data.events || []).filter((e) => e.id !== eventId);
      const updatedContent = Buffer.from(JSON.stringify(data, null, 2), "utf-8").toString("base64");
      await putFile("events.json", updatedContent, eventsFile.sha, `Delete event: ${eventId}`);
      return res.status(200).json({ success: true, deleted: eventId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  }

  if (!event || !event.id || !event.name) {
    return res.status(400).json({ error: "Missing event data" });
  }

  try {
    let flyerUrl = event.flyer || "";

    // If a new image was uploaded, commit it to /images and use its raw URL
    if (imageBase64 && imageFilename) {
      const safeName = imageFilename.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const imagePath = `images/${Date.now()}-${safeName}`;
      const existingImage = await getFile(imagePath);
      const rawBase64 = imageBase64.includes(",") ? imageBase64.split(",")[1] : imageBase64;
      await putFile(imagePath, rawBase64, existingImage.sha, `Upload flyer: ${imageFilename}`);
      flyerUrl = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${CONTENT_REPO}/main/${imagePath}`;
    }

    // Read current events.json (or start fresh if it doesn't exist yet)
    const eventsFile = await getFile("events.json");
    const data = eventsFile.exists ? JSON.parse(eventsFile.content) : { events: [] };

    const finalEvent = { ...event, flyer: flyerUrl };
    const idx = data.events.findIndex((e) => e.id === finalEvent.id);
    if (idx >= 0) {
      data.events[idx] = finalEvent;
    } else {
      data.events.push(finalEvent);
    }

    const updatedContent = Buffer.from(JSON.stringify(data, null, 2), "utf-8").toString("base64");
    await putFile("events.json", updatedContent, eventsFile.sha, `Update event: ${finalEvent.name}`);

    return res.status(200).json({ success: true, event: finalEvent });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
