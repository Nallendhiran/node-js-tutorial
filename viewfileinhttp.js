const http= require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    const stream=fs.createReadStream("./example.txt");
        res.writeHead(200,{'content-type':'text/html'});
        stream.pipe(res);
}).listen('2020');