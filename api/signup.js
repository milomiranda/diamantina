// This runs on Vercel's servers, never in the browser — the GitHub token
// stays secret here and is never exposed to visitors of the site.

const GITHUB_OWNER = "milomiranda";
const GITHUB_REPO = "diamantina-signups";
const GITHUB_FILE_PATH = "signups.csv";
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

  const { name, achternaam, email } = req.body || {};

  if (!name || !achternaam || !email) {
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
    // 1. Get the current file content + its sha (GitHub requires the sha
    //    of the version you're editing, to prevent silently overwriting
    //    someone else's concurrent change).
    const getRes = await fetch(apiUrl, { headers });
    if (!getRes.ok) {
      throw new Error(`Could not read signups.csv (${getRes.status})`);
    }
    const fileData = await getRes.json();
    const currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");

    // 2. Append the new row.
    const date = new Date().toISOString();
    const newRow = [name, achternaam, email, date].map(escapeCsvField).join(",");
    const updatedContent = currentContent.replace(/\n?$/, "\n") + newRow + "\n";

    // 3. Push the updated file back to GitHub (this creates a real commit).
    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `New signup: ${email}`,
        content: Buffer.from(updatedContent, "utf-8").toString("base64"),
        sha: fileData.sha,
      }),
    });

    if (!putRes.ok) {
      const errText = await putRes.text();
      throw new Error(`Could not save signup (${putRes.status}): ${errText}`);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
