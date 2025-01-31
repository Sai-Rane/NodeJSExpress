const EventEmitter=require('events')

//To create a new emitter we create a new instance of a class that we just imported
const myEmitter=new EventEmitter()

// We can even pass arguments to the event listener by passing them as an additional argument in the emitter
myEmitter.on('newSale',(stock)=>{
    console.log(`There are now ${stock} items left in stock`)
})

myEmitter.emit('newSale',9)