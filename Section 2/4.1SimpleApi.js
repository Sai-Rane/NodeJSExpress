//API It is an service from which we can request data
const fs = require("fs");
const http = require("http"); //importing http module. This will help us in building http server
const url = require("url");

//This top level code will be executed only once we start the program
const data = fs.readFileSync("./dev-data/data.json", "utf-8");  //callback are required only for async operation.Here, we are reading file in Synchronous manner. So we dont need to pass callback function
const dataObj = JSON.parse(data);
console.log("productData", dataObj);
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
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
