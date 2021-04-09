var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer();

server.listen(8080,function(){
    console.log('启动成功');
})  

server.on('request',function(req,res){
  var urls = url.parse(req.url,true);
  if(urls.pathname =='/getname'){
    if(urls.query.name == 'admin'){
        res.end('1')
    }else{
        res.end('0')
    }
  }else{
      //看看请求是不是/getname如果不是请求什么就返回什么，这是解析路径
      fs.readFile('.'+urls.pathname,function(err,data_str){
        if(!err){
            res.end(data_str);
        }else{
            res.end();
        }
      })
  }
})