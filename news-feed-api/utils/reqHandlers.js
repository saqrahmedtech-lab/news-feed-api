import { filterDataByCategory } from "./filterDataByCategory.js";
import { getAllArticles } from "./getAllArticles.js";

const categoryMap = {
  "/api/politics": "Politics",
  "/api/world": "World",
  "/api/tech": "Tech",
  "/api/culture": "Culture",
  "/api/opinion": "Opinion",
};

export async function handleGetRequests(res, url) {
  const searchName = url.searchParams.get("search");

  if (url.pathname === "/api/news") {
    getAllArticles(res, searchName);
    return;
  }

  const categoryName = categoryMap[url.pathname];
  if (!categoryName) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Not found" }));
  } else {
    filterDataByCategory(categoryMap[url.pathname], res, searchName);
  }

  // if (url.pathname === "/api/politics") {
  //   filterDataByCategory("Politics", res, searchName);
  // } else if (url.pathname === "/api/world") {
  //   filterDataByCategory("World", res, searchName);
  // } else if (url.pathname === "/api/tech") {
  //   filterDataByCategory("Tech", res, searchName);
  // } else if (url.pathname === "/api/culture") {
  //   filterDataByCategory("Culture", res, searchName);
  // } else if (url.pathname === "/api/opinion") {
  //   filterDataByCategory("Opinion", res, searchName);
  // }
}
