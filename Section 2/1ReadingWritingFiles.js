const fs = require("fs"); // fs here stands for File System
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");  //readFileSync takes 2 arguments, 1st is the path of the file and 2nd is the encoding type
console.log("fs", textIn);

const textOut = "India are World Champions";
//Now we will write the above text in the input.txt file
fs.writeFileSync("./txt/output.txt", textOut);  // writeFileSync takes 3 arguments, 1st is the path of the file, 2nd is the text that we want to write in the file and 3rd is the encoding type which is optional

//Non blocking (Async)
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Will read file in Async manner");
