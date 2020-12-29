const express=require('express');
const path=require('path');
const exp=express();
exp.use('/private',express.static(path.join(__dirname,'nodejs')));
exp.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'nodejs','example.txt'));
}).listen(2022);