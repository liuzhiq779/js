var http = require('http');

var server = http.createServer();

server.listen(3000,function(){
    console.log('启动成功：3000')
})

var router = require('./router');
router.start(server);

