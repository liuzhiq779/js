//服务器模块
var http = require('http');

var server = http.createServer();
//加载路由模块进行不同请求地址的判断
var router = require('./router')
//调用路由方法将服务对象传入
router.start(server);

 server.listen(3000,function(){
   console.log('启动成功，访问localhst:3000端口')
 })
