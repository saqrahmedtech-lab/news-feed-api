import { filterDataByCategory } from "./filterDataByCategory.js";

export async function handleGetRequests(req, res, url) {
  const searchName = url.searchParams.get("search");
  if (url.pathname === "/api/politics") {
    filterDataByCategory("Politics", res, searchName);
  }
  if (url.pathname === "/api/world") {
    filterDataByCategory("World", res, searchName);
  }
  if (url.pathname === "/api/tech") {
    filterDataByCategory("Tech", res, searchName);
  }
  if (url.pathname === "/api/culture") {
    filterDataByCategory("Culture", res, searchName);
  }
  if (url.pathname === "/api/opinion") {
    filterDataByCategory("Opinion", res, searchName);
  }
}
