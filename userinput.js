const read=require("readline");
var rl=read.createInterface({input:process.stdin,output:process.stdout});
const num1=Math.floor(Math.random()*10);
const num2=Math.floor(Math.random()*10);
let result=num1+num2;
rl.question('what is addition of '+ num1 + ' and ' + num2 + ' is?\n',(userinput)=>
{ if(userinput==result){
    rl.close();
}
else{
rl.setPrompt("try again\n");
rl.prompt();
rl.on("line",(userinput)=>{
 if(userinput==result){
    rl.close();
}
else{
    rl.setPrompt("wrong retry again\n");
    rl.prompt();
}
});
}   
    
});
rl.on("close",()=>{
    console.log("correct");
});