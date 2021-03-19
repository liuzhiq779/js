const fs = require('fs')
 
fs.readFile('./a.txt','utf8', function(err,data){
    if(err){
        throw err
    }
    else{
        console.log(data)
    }
})