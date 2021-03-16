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
            fs.readFile('./db.json','utf8',function(err,json_str){
              var json_arr = JSON.parse(json_str);
                for(let i = 0;i<json_arr.length;i++){
                     
                }
            })
          res.end(strHtml); 
          console.log(strHtml)
        });
    }
}

