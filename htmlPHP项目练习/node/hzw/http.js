//服务器模块
var http = require('http');

var server = http.createServer();

var router = require('./router')

router.start(server);

 server.listen(3000,function(){
   console.log('启动成功')
 })
