// Routing means implementing different url

const http = require("http"); //importing http module. This will help us in building http server
const url = require("url");

// In order to build a server, we have to do 2 things: 1st we create a server and 2nd we start the server
const server = http.createServer((req, res) => {
  //this callback function will get executed each time a new request hits a server
  console.log("req.url ->", req.url);

  const pathName = req.url;
  if (pathName == "/" || pathName == "/overview") {
    res.end("This is overview");
  } else if (pathName == "/product") {
    res.end("This is product");
  } else {
    //writeHead can also send headers. Headers are basically piece of information about the response that we are sending back. We specify the headers in form of objects. One of the standard headers is to inform the browser about the content type
    // res.writeHead(404, {
    //   "Content-type": "text/html",
    // });
    res.end("Page not found"); //404 is the http status code
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
