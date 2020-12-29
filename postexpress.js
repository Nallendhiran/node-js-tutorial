const express=require('express');
const path=require('path');
const parser=require('body-parser');
const exp=express();
exp.use('/private',express.static(path.join(__dirname,'nodejs')));
exp.use(parser.urlencoded({extended:false}));

exp.post('/',(req,res)=>{
    console.log(req.body);
    res.send('successful');
}).listen(2000);