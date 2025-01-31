const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1
    fs.readFile("test-file.txt", "utf-8", (err, data) => {
        if (err) console.log("Error", err);
        res.end(data);
    });
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000");
});