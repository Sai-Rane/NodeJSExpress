const http = require("http"); //importing http module. This will help us in building http server
const url = require("url");

// In order to build a server, we have to do 2 things: 1st we create a server and 2nd we start the server
const server = http.createServer((req, res) => {
  //this callback function will get executed each time a new request hits a server
  console.log(req.url);

  const pathName = req.url;
  if (pathName == "/" || pathName == "/overview") {
    res.end("This is overview");
  } else if (pathName == "/product") {
    res.end("This is product");
  } else {
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
