var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer();

server.listen(8080,function(){
    console.log('启动成功')
})


server.on('request',function(req,res){
    var urls = url.parse(req.url,true);
    // console.log(urls);
    if(urls.pathname == '/gets'){
        console.log('333');
        res.end('lisi')
    }else{
        fs.readFile('.'+urls.pathname,function(err,data_str){
            if(!err){
                res.end(data_str)
            }else{
                // console.log(err);
                res.end('');
            }
        });
    }
})

