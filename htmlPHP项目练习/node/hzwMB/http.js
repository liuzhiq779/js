var http = require('http');

var server = http.createServer();

server.listen(9000,function(){
    console.log('启动成功：9000')
})

var router = require('./router');
router.start(server);

