const express=require('express');
const exp=express();
exp.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send(req.params.name+ ':' +req.params.age);
    console.log(req.query);
}).listen(2021);