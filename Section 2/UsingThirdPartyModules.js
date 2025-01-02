//API It is an service from which we can request data
const fs = require("fs");
const http = require("http"); //importing http module. This will help us in building http server
const url = require("url")
const slugify=require("slugify")
const replaceTemplate = require("./modules/replaceTemplate")

console.log("slugify",slugify('Fresh Avocados',{
    lower:true,
}))

const tempOverview = fs.readFileSync(
  "./templates/template-overview.html",
  "utf-8"
);
const tempCard = fs.readFileSync("./templates/template-card.html", "utf-8");
const tempProduct = fs.readFileSync(
  "./templates/template-product.html",
  "utf-8"
);

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);  //parse Converts JSON object to JS object
console.log("dataObj", dataObj);

const slugs=dataObj.map((ele)=>slugify(ele?.productName,{
    lower:true,
}))
console.log('slugs', slugs)

// In order to build a server, we have to do 2 things: 1st we create a server and 2nd we start the server
const server = http.createServer((req, res) => {
  //this callback function will get executed each time a new request hits a server
  console.log("req.url ->", req.url);
  console.log("url ->", url.parse(req.url, true));  //you need to pass true, to actually parse the query into an object. example: http://localhost:8000/product?id=0 , in this the query is id=0

  const { query, pathname } = url.parse(req.url, true)

  //overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardsHtml = dataObj
      .map((ele) => replaceTemplate(tempCard, ele))
      .join("");
    // console.log("cardsHtml", cardsHtml);
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output); //With help of res we will send response to the client(this will be visible on the browser)
  }

  // product page
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    console.log('query', query)
    const product = dataObj[query?.id]
    const output = replaceTemplate(tempProduct, product)
    res.end(output)
  }

  // api page
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }

  // not found
  else {
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
