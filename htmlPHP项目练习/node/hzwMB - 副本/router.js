// import { Server } from "tls";
var url = require('url');
var controller = require('./controller');
module.exports = {
    start:function(server){
        server.on('request',function(req,res){
            // res.end('23')
            var urls = url.parse(req.url,true);
            // console.log(urls);
            if(urls.pathname == '/'){
                controller.index(res);
            }else if(urls.pathname == '/getone'){
                // console.log(2);
                controller.getone(req,res,urls.query.id);
            }else if(urls.pathname == '/edituser'){
                controller.getedit(req,res,urls.query.id);
            }else if(urls.pathname == '/editpost'){
                controller.editpost(req,res,urls.query.id);
            }else if(urls.pathname == '/deluser'){
                controller.deluser(req,res,urls.query.id);
            }else{
                controller.other(req,res);
            }
        }) 
    }
}