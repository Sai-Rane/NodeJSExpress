const EventEmitter=require('events')
const http=require('http')

class Sales extends EventEmitter{  //the sales class inherits everything from the event emitter class
    constructor(){  //the constructor function gets executed as soon as we cretae a new object from a class
        super() //this is how we call the constructor of the parent class
    }
}

const myEmitter=new Sales()

// We can even pass arguments to the event listener by passing them as an additional argument in the emitter
myEmitter.on('newSale',(stock)=>{
    console.log(`There are now ${stock} items left in stock`)
})

myEmitter.emit('newSale',9)

// -----------------------------------------------------------
const server=http.createServer()

//now we will listen to different events which the server will emit, for that we will be using the on method
server.on('request',(req,res)=>{
    console.log("Request received")
    res.end("Request received")
})
// we can listen ,multiple times to the same event
server.on('request',(req,res)=>{
    console.log("Another request received")
})
server.on('close',(req,res)=>{
    console.log("Server closed")
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("Waiting for requests")
})

//browsers try to request a favicon for each website. So we will see 2 requests in the console
