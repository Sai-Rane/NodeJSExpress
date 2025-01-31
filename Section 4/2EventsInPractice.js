const EventEmitter=require('events')

//To create a new emitter we create a new instance of a class that we just imported
const myEmitter=new EventEmitter()

myEmitter.on('newSale',()=>{
    console.log("There was new sale")
})

// One of the nice things about event emitters is that we can set multiple event listeners for the same event
myEmitter.on('newSale',()=>{
    console.log("Customer name: Jon")
})

myEmitter.emit('newSale')  //this emitting is like we are clicking on a button. We are emitting a event here
//if we add multiple listeners for the same event then they will run synchronously in the order they were in code
