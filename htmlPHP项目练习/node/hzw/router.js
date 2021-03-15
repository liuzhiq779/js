//路由模块，处理请求的

const countraller = require('./countraller');

module.exports = {
  start:function(server) {
    server.on('request',function(req,res){
     var urls = req.url;
     if(urls == '/') {
        var countraller= require('./countraller')
        countraller.index(res);
     }else{
      var countraller = require('./countraller')
      countraller.other(req,res)
     }
    }) 
  }
}