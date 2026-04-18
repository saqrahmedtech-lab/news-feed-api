import http from "node:http";
import { handleGetRequests } from "./utils/reqHandlers.js";
import { serveStaticFiles } from "./utils/serveStaticFiles.js";
const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/")) {
    handleGetRequests(req, res);
  } else {
    serveStaticFiles(req, res);
  }
});

server.listen(8000);
