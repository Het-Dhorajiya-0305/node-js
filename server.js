const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") {
        res.end()
    }
    const myurl= url.parse(req.url)
    console.log(myurl);
    console.log("request received")
    fs.appendFile("./url.txt", req.url, (err) => {

        res.end("hello form server")
    })
})

server.listen(3000, () => {
    console.log("server is running on port 3000")
})