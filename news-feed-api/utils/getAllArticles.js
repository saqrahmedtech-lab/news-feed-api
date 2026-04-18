import path from "node:path";
import fs from "node:fs/promises";

export async function getAllArticles(res, searchName) {
  const __dirname = import.meta.dirname;
  const articlesPath = path.join(__dirname, "..", "public", "data.json");
  try {
    const content = await fs.readFile(articlesPath, "utf8");
    const parsedContent = JSON.parse(content);
    const data = parsedContent.articles.filter((el) => {
      if (!searchName) return true;
      const search = searchName.toLowerCase();
      return (
        el.title.toLowerCase().includes(search) ||
        el.description.toLowerCase().includes(search)
      );
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Internal server error" }));
  }
}
