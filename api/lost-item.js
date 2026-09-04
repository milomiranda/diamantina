const GITHUB_OWNER = "milomiranda";
const GITHUB_REPO = "diamantina-signups";
const GITHUB_FILE_PATH = "lost-items.csv";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function escapeCsvField(value) {
  const str = String(value ?? "");
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, eventDate, item, color, contents, description } = req.body || {};

  if (!firstName || !lastName || !email || !item || !description) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  };

  try {
    // If lost-items.csv doesn't exist yet, this GET will 404 — we create it
    // fresh with a header row on the first-ever submission.
    const getRes = await fetch(apiUrl, { headers });

    let currentContent = "firstName,lastName,email,eventDate,item,color,contents,description,fecha\n";
    let sha = undefined;

    if (getRes.ok) {
      const fileData = await getRes.json();
      currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");
      sha = fileData.sha;
    } else if (getRes.status !== 404) {
      throw new Error(`Could not read lost-items.csv (${getRes.status})`);
    }

    const date = new Date().toISOString();
    const newRow = [firstName, lastName, email, eventDate, item, color, contents, description, date]
      .map(escapeCsvField)
      .join(",");
    const updatedContent = currentContent.replace(/\n?$/, "\n") + newRow + "\n";

    const putBody = {
      message: `Lost item report: ${item} (${email})`,
      content: Buffer.from(updatedContent, "utf-8").toString("base64"),
    };
    if (sha) putBody.sha = sha; // omit on first-ever create, GitHub requires no sha for new files

    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(putBody),
    });

    if (!putRes.ok) {
      const errText = await putRes.text();
      throw new Error(`Could not save report (${putRes.status}): ${errText}`);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
