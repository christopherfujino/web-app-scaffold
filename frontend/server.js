/* global process */

const fs = require("fs");
const http = require("http");

const app = http.createServer((req, res) => {
  console.log(`Received a request for ${req.url}`);
  let filepath;
  switch (req.url) {
  case "/":
    filepath = "./dist/index.html";
    break;
  case "/favicon.ico":
    filepath = "./favicon.ico";
    break;
  default:
    filepath = `./dist/${req.url}`;
    break;
  }
  fs.readFile(filepath, function(err, content) {
    if (err) {
      console.log(`Error reading ${req.url} with ${err.code}`);
      res.writeHead(500);
      res.end("Oops!");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(content, "utf-8");
      console.log(`Successfully served ${req.url}`);
    }
  });
});

app.listen(4000);
console.log(`listening on port 4000 from host ${process.env.SERVER_HOST}`);
