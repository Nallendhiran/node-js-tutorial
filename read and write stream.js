const fs=require('fs');
const read=fs.createReadStream('example.txt','utf8');
const write=fs.createWriteStream('example2.txt');
read.on('data',(chunk)=>{
    console.log(chunk);
});
read.on('data',(chunk)=>{
    write.write(chunk);
});