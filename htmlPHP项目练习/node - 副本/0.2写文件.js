//    
const  str = 'aaaaabbbb4444';
const fs = require('fs')
fs.writeFile('./a.txt',str,function(err){
    if(err===null){
      console.log('恭喜你写入成功')
    }
})