var http = require('http');
var server = http.createServer();

server.listen(8000,function(err){
   if(!err){
    console.log('启动成功')
   }
})

server.on('request',function(req,res){
    // 设置字符编码及数据类型
    res.setHeader('content-type','text/html;charset=utf-8');
   // res.write('张晓峰很丑');
   //响应页面  
   //1.响应页面实际是将html文件中的代码响应回去
   //2.直接利用fs模块读取这个文件就可以了
   var fs = require('fs')
   fs.readFile('./0.9.html','utf8',function(err,data){
       res.write(data);
       res.end();
       // console.log(data)
   })
});
// var http = require('http');
// var server = http.createServer();

// server.listen(8000,function(){
//     console.log('启动成功')
// })

// server.on('request',function(req,res){
//     // 设置字符编码及数据类型
//     res.setHeader('content-type','text/html;charset=utf-8');
//     // res.write('<s>哈哈哈哈</s>');

//     // 响应一个页面
//     // 1：相应页面实际上是将html文件中的代码响应回去
//     // 2: 利用fs模块读取文件内容
//     var fs = require('fs');
//     fs.readFile('./0.2.html','utf8',function(err,data){
//         // console.log(data);
//         res.write(data);
//         res.end();
//     })
// });
