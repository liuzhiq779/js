// var http = require('http')
// var server = http.createServer();

// server.listen(3000,function(){
//     console.log('启动成功')
// })

// server.on('request',function(req,res){
//     //请求
//     var urls = req.url;
//     if(urls =='/'){
//           //设置字符串及其编码类型
//     res.setHeader('content-type','text/html;charset=utf-8');
//     //
//     var fs = require('fs')
//     fs.readFile('./10.html','utf8',function(err,data){
//         res.write(data);
//         res.end();
//     })
//     } else if(urls == './1.jpg'){
//       var fs = require('fs')
//       fs.readFile('./1.jpg',function(err,data){
//           res.write(data);
//           res.end();
//       })
//     } else if(urls == './2.jpg'){

//     }
// })
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
        
        fs.readFile('./10.html', 'utf8', function (err, data) {
            // console.log(data);
            res.write(data);
            res.end();
        })
    }else if(urls == '/1.jpg'){
        fs.readFile('./1.jpg',function(err,data){
            res.write(data);
            res.end();
        })
    }else if(urls == '/3.jpg'){
        fs.readFile('./3.jpg',function(err,data){
            res.write(data);
            res.end();
        })
    }


});
