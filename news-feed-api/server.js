import http from "node:http";
import { handleGetRequests, handlePostRequests } from "./utils/reqHandlers.js";
import { serveStaticFiles } from "./utils/serveStaticFiles.js";
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (req.url.startsWith("/api")) {
    console.log(req.method);
    if (req.method === "GET") handleGetRequests(req, res, url);
    if (req.method === "POST") {
      handlePostRequests(req, res);
    }
  } else {
    serveStaticFiles(req, res, url);
  }
});

server.listen(8000);
