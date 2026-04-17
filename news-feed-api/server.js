import http from "node:http";

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end();
});

server.listen(8000);
