import path from "node:path";
import fs from "node:fs/promises";

export async function filterDataByCategory(category, res) {
  const __dirname = import.meta.dirname;
  const articlesPath = path.join(__dirname, "..", "public", "data.json");
  try {
    const content = await fs.readFile(articlesPath, "utf8");
    const parsedContent = await JSON.parse(content);
    const data = parsedContent.articles.filter(
      (el) => el.category === category,
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data }));
  } catch (err) {
    console.log(err);
  }
}
