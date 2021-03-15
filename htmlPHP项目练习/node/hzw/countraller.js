//业务处理模块
var fs = require('fs');

module.exports = {
    other:function(urls,res){
     fs.readFile('.'+urls,function(err,data){
         if(!err){
             res.end(data);
         }else{
             res.end('');
         }
     })
    },
    index:function(res){
        fs.readFile('./index.html','utf8',function(err,strHtml){
          res.end(strHtml); 
          //console.log(strHtml)
        });
    }
}

