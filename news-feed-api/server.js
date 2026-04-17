import http from "node:http";

import { serveStaticFiles } from "./handlers/serveStaticFiles.js";
const server = http.createServer((req, res) => {
  serveStaticFiles(req, res);
});

server.listen(8000);
