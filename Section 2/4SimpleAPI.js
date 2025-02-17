//API It is an service from which we can request data
const fs = require("fs");
const http = require("http"); //importing http module. This will help us in building http server
const url = require("url");

// In order to build a server, we have to do 2 things: 1st we create a server and 2nd we start the server
const server = http.createServer((req, res) => {
  //this callback function will get executed each time a new request hits a server
  console.log("req.url ->", req.url);

  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview"); //With help of res we will send response to the client
  } else if (pathName === "/product") {
    res.end("This is product");
  } else if (pathName === "/api") {
    //If someone now hits the /api url, the file will have to be read everytime and send back. Instead of this we can send the file once in the beginning and then each time when someone hits the /api route, simply send back the data without having to read it everytime the user requests. So we can put this at the top
    fs.readFile("./dev-data/data.json", "utf-8", (err, data) => {
      console.log("err", err);
      const productData = JSON.parse(data);
      console.log("productData", productData);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
