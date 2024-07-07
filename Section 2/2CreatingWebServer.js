const http = require("http"); //importing http module. This will help us in building http server

// In order to build a server, we have to do 2 things: 1st we create a server and 2nd we start the server
const server = http.createServer((req, res) => {
  //this callback function will get executed each time a new request hits a server
  res.end("hello from the server side"); //With help of res we will send response to the client
});

//Now lets listens to the incoming requests from the client
//The listen method accepts a couple of parameters as shown below. 1st is the port number, 2nd is host(means the current computer the program is currently running at, Standard IP address for localhost is 127.0.0.1), 3rd is the callbackfunction
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
