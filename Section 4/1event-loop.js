const fs=require("fs")
const crypto=require("crypto")

const start=Date.now()

setTimeout(()=>{
    console.log("timer 1 finished")
},1000)

setImmediate(()=>{
    console.log("Immediate 1 finished")
})

fs.readFile("test-file.txt","utf-8",(err,data)=>{
    console.log("I/O finished")
    console.log("-----------")

    setTimeout(()=>{
        console.log("timer 2 finished")
    },1000)
    setTimeout(()=>{
        console.log("timer 3 finished")
    },3000)
    
    setImmediate(()=>{
        console.log("Immediate 2 finished")
    })

    // pbkdf2 is the encryption function
    crypto.pbkdf2('password',"salt",10000,1024,"sha512",()=>{
        console.log(Date.now()-start,"password encrypted")
    })
})

console.log("hello from top level code")