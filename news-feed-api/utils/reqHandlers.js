import path from "node:path";
import fs from "node:fs/promises";
import { filterDataByCategory } from "./filterDataByCategory.js";
import { getAllArticles } from "./getAllArticles.js";

const categoryMap = {
  "/api/politics": "Politics",
  "/api/world": "World",
  "/api/tech": "Tech",
  "/api/culture": "Culture",
  "/api/opinion": "Opinion",
};

export async function handleGetRequests(req, res, url) {
  const searchName = url.searchParams.get("search");
  // all articles
  if (url.pathname === "/api/news") {
    getAllArticles(res, searchName);
    return;
  }

  // filter by id
  if (url.pathname.startsWith("/api/article/")) {
    const id = url.pathname.split("/").at(-1);
    const __dirname = import.meta.dirname;
    const dataPath = path.join(__dirname, "..", "public", "data.json");
    try {
      const dataContent = await fs.readFile(dataPath, "utf-8");
      const parsed = JSON.parse(dataContent);
      const article = parsed.articles.find((el) => +el.id === +id);
      res.statusCode = article ? 200 : 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ data: article ?? null }));
    } catch (err) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Internal server error" }));
    }
    return;
  }

  // filter by category name
  const categoryName = categoryMap[url.pathname];
  if (!categoryName) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Not found" }));
  } else {
    filterDataByCategory(categoryMap[url.pathname], res, searchName);
  }
}
