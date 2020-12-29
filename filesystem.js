const fs=require('fs');
fs.writeFile('example.txt','i am watching tv',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file created');
        fs.readFile("example.txt",'utf8',(err,file)=>{
            if(err){
                 console.log(err);
            }
            else{
                console.log(file);
            }
        
        });
    }
});
fs.unlink('example.txt',(err)=>{if(err){console.log(err);} 
else{console.log('successfully deleted');}
});
//for delete=> unlink;
//for adding text=>appendFile;
//for rename=>rename;

//directory:
//for make directory=>mkdir();
//for remove directory=>rmdir();
//for read directory=> readdir();