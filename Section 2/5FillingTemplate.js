//API It is an service from which we can request data
const fs = require("fs");
const http = require("http"); //importing http module. This will help us in building http server

const tempOverview = fs.readFileSync(
  "./templates/template-overview.html",
  "utf-8"
);
const tempCard = fs.readFileSync("./templates/template-card.html", "utf-8");
const tempProduct = fs.readFileSync(
  "./templates/template-product.html",
  "utf-8"
);

// In order to build a server, we have to do 2 things: 1st we create a server and 2nd we start the server
const server = http.createServer((req, res) => {
  //this callback function will get executed each time a new request hits a server
  console.log("req.url ->", req.url);

  const pathName = req.url;
  //overview page
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview"); //With help of res we will send response to the client
  }

  // product page
  else if (pathName === "/product") {
    res.end("This is product");
  }

  // api page
  else if (pathName === "/api") {
    fs.readFile("./dev-data/data.json", "utf-8", (err, data) => {
      console.log("err", err);
      const productData = JSON.parse(data);
      console.log("productData", productData);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  }

  // not found
  else {
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
