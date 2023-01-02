const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
    res.end('<h1>Waliston</h1>')
})

server.listen(3000, () => {
    console.log(`Seerver running at port 3000`);
})