//引入url模块他可以把url里面所有的数据都解析成的对象通过query方法
var url = require('url');
var countraller= require('./countraller')
//路由模块，处理请求的
//引入业务处理层模块
//导出页面数据
module.exports = {
//服务请求处理saart是业务层传递过来的参数
//接受服务对象
  start:function(server) {
    //监听请求事件
    server.on('request',function(req,res){
    //请求服务地址
     var urls = url.parse(req.url,true);
     //判断请求地址
     if(urls.pathname == '/') {
       //调用业务模块进行业务处理
      //  var countraller= require('./countraller')
        //传递响应对象，是传给业务层的参数res
        countraller.index(res);
        //如果路径不是/默认请求其他资源
     }else if(urls.pathname ==='/getone'){
       //res.end('11')
       //调用这个方法，传递三个实参
       countraller.getone(req,res,urls.query.id);
     }else{
       //调用业务模块other方法
      countraller.other(urls.pathname,res)
     }
    }) 
  }
}