const express=require('express');
const exp=express();


exp.get('/example',(req,res)=>{
    res.send('another page');

}).listen(2020);