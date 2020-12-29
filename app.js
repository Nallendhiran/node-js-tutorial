const express= require('express');
const mongoose=require('mongoose');
const app =express()
const url ="mongodb://localhost/testdb";

mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection
app.use(express.json())
const Rout=require('./mongodb');
app.use('/mongodb',Rout);


con.on('open',()=>{
    console.log('server connected....');
});


app.listen(1000,()=>{console.log('listening server...');});








