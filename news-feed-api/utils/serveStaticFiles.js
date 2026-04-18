import path from "node:path";
import fs from "node:fs/promises";

const __dirname = import.meta.dirname;

const fileTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",

  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",

  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",

  ".pdf": "application/pdf",
  ".zip": "application/zip",
};

export async function serveStaticFiles(req, res) {
  const fileName =
    req.url === "/"
      ? "index.html"
      : req.url === "/world"
        ? "world.html"
        : req.url === "/politics"
          ? "politics.html"
          : req.url === "/tech"
            ? "tech.html"
            : req.url === "culture"
              ? "culture.html"
              : req.url === "opinion"
                ? "opinion.html"
                : req.url.slice(1);
  const filePath = path.join(__dirname, "..", "public", fileName);
  const fileExt = path.extname(filePath);

  try {
    const fileContent = await fs.readFile(filePath);
    res.setHeader("Content-Type", fileTypes[fileExt]);
    res.statusCode = 200;
    res.end(fileContent);
  } catch (err) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("File not found");
  }
}
