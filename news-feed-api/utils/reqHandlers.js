import { filterDataByCategory } from "./filterDataByCategory.js";

export async function handleGetRequests(req, res) {
  console.log(req);
  if (req.url === "/api/politics") {
    filterDataByCategory("Politics", res);
  }
  if (req.url === "/api/world") {
    filterDataByCategory("World", res);
  }
  if (req.url === "/api/tech") {
    filterDataByCategory("Tech", res);
  }
  if (req.url === "/api/culture") {
    filterDataByCategory("Culture", res);
  }
  if (req.url === "/api/opinion") {
    filterDataByCategory("Opinion", res);
  }
}
