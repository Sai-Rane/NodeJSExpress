# NodeJSExpress

https://github.com/jonasschmedtmann/complete-node-bootcamp

NodeJS
NodeJS is a JS runtime built on Google's open source V8 Javascript engine

Open terminal and write node
After this you can write you JS code in terminal
You can write .exit if you want to stop it

NodeJs is built around the concept of modules where all kinds of additional functionality are stored in module

NodeJS Documentation
https://nodejs.org/docs/latest-v16.x/api/index.html
In this you can find all the modules you need for your project

Synchronous code is also called as blocking code as it waits for previous line to finish
Asynchronous code is non blocking code

Every file in NodeJS is a Module

req url is all of this part as shown below
http://127.0.0.1:8000/product?id=0
 
but we only want the 
 
url.parse( req.url, true )   // we need to pass true in the parse function in order to actually parse the query ( ?id=0 this is the query) in an object
 
in console log url.parse , you will see an object where, query :{ id:0 } , pathname: "/product"

npm init 
Will create a package.json file

--save-dev will install package as a dev dependency
"^1.18.11" major, minor and patch version