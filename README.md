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

Section 4 ------------>
NodeJS is a JS runtime built on Google's open source V8 Javascript engine.
V8 is the part which converts JS code to machine code.
libuv implements the extremely 2 important feature of node JS which are event loop and thread pool.
Event loop is responsible for executing call backs while the thread pool is responsible for executing CPU intensive tasks.libuc is completely written in C++ and not in JS.V8 also uses C++.

NodeJS is a single threaded language.Whn aprogram is initialized all the top level code is executed which means all the code which is not inside any callback function, and then the event loop starts running. Some tasks are too heavy to be executed in the event loop, because they would block the single thread. So that's where the thread pool comes in. Thread pool gives us 4 additional threads which are completely separate from the main single thread. So now the event loop can automatically offload heavy tasks on the thread pool. All this happens behind the scenes. Its not us the developers who decide which tasks will go to the thread pool.

In node there are certain objects called event emitters, that emit named events as soon as something important happens in the app like a request hitiing a server or a timer expiring. These events can then be picked by event listeners and then the event listeners then fires a callback function attached to it.

Lecture 36
Streams : Used to read and write data piece by piece without completing the whole read or write operation and therefore without keeping all the data in memory.(Processing is done in chunks)

There are 4 types of Streams in NodeJS. Readable, Writable are the most important ones.
Readable Streams - Used to read data from a source.
Writable Streams - Used to write data to a destination.
Duplex Streams - Used to read and write data.
Transform Streams - Duplex streams that can modify or transform the data as it is read or written.

