const fs = require("fs"); // fs here stands for File System
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log("fs", textIn);

const textOut = "India are World Champions";
//Now we will write the above text in the input.txt file
fs.writeFileSync("./txt/output.txt", textOut);

//Non blocking (Async)
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Will read file in Async manner");
