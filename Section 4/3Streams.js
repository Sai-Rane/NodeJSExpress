// Streams : Used to read and write data piece by piece without completing the whole read or write operation and therefore without keeping all the data in memory.(Processing is done in chunks)

// There are 4 types of Streams in NodeJS. Readable, Writable are the most important ones.
// Readable Streams - Used to read data from a source.
// Writable Streams - Used to write data to a destination.
// Duplex Streams - Used to read and write data.
// Transform Streams - Duplex streams that can modify or transform the data as it is read or written.

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