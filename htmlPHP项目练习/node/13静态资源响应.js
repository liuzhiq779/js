var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.listen(3000, function () {
    console.log('启动成功')
})

server.on('request', function (req, res) {
    var urls = req.url;
    if (urls == '/') {
        // 设置字符编码及数据类型
        res.setHeader('content-type', 'text/html;charset=utf-8');
        // res.write('<s>哈哈哈哈</s>');

        // 响应一个页面
        // 1：相应页面实际上是将html文件中的代码响应回去
        // 2: 利用fs模块读取文件内容
        //响应文件内容
        fs.readFile('./01.html', 'utf8', function (err, data) {
            // console.log(data);
            //响应文件内容并断开 
            res.write(data);
            res.end();
        })
    //如果请求的不是那么就是其他资源
    //如果是直接根据资源响应
    }else {
        fs.readFile('.' +urls,function(err,data){
           if(!err){
            res.write(data);
           }else{
               res.write('');
           }
            res.end();
        })
    } 
});