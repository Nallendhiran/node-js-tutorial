const mongoose = require('mongoose');

const sschema= new mongoose.Schema({
name:{
 type:String,
 required:true
},
group:{
    type:String,
    required:true
},
college:{
    type:String,
    required:true,
    default:'college'
}

});
module.exports=mongoose.model('schema',sschema)