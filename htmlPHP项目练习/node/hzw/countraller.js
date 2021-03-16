//业务处理模块
var fs = require('fs');

module.exports = {
    //封装函数方法
    other:function(urls,res){
        //读取文件然后判断路径和请求
     fs.readFile('.'+urls,function(err,data){
         if(!err){
             res.end(data);
         }else{
             res.end('');
         }
     })
    },
    index:function(res){
        //读取html文件
        fs.readFile('./index.html','utf8',function(err,strHtml){
            //读取json数据文件
            fs.readFile('./db.json','utf8',function(err,json_str){
            //进行字符串转换
              var json_arr = JSON.parse(json_str);
                var s = '';
                //循环遍历拿数据，将数据与页面整合
                for(let i = 0;i<json_arr.length;i++){
                    //拿到数据之后进行字符串拼接通过id等属性在数组中取
                  s += '<tr>';
                  s += '<td>'+json_arr[i].id+'<td>';
                  s += '<td>'+json_arr[i].name+'<td>';
                  s +=  '<td>'+json_arr[i].nengli+'<td>'; 
                  s += '<td>'+json_arr[i].jituan+'<td>';
                  s += '<td><a href="/getone?id='+json_arr[i].id+'">查看</a><a href="#">添加</a><a href="#">删除</a><td>';
                   s += '</tr>' ;
                }
                //用正则进行数据填充和页面结构替换匹配
               var htmls =  strHtml.replace(/{hh}/,s)
              //  console.log(htmls)
              //返回数据吧数据给服务端进行响应
              res.end(htmls);
            })
         // res.end('htmls');
        //   res.end(strHtml); 
          //console.log(strHtml)
        });
    },
    //获取单个用户信息的业务处理
    getone(req,res,id){
      //第一步把用户信息到底等于几的id信息拿到从router里面传递一个id形参
      //取数据读页面整合数据返回
      fs.readFile('./db.json','utf8',function(err,data){
          //解析data数据
          var arr = JSON.parse(data);
          var userinfo = '';
          //循环遍历拿取数据
          for(var i=0;i<arr.length;i++){
             if(arr[i].id == id){
                 userinfo = arr[i];
             }
          }
          //这是用来接收数据然后拼接字符串的
         var  tag_user = '<h2>id:'+userinfo.id+' </h2>'
          tag_user += '<h2>名字:'+userinfo.name+' </h2>'
          tag_user += '<h2>能力:'+userinfo.nengli+' </h2>'
          tag_user += '<h2>集团:'+userinfo.jituan+' </h2>'
          //拿到上面的数据之后显示点击页面，方法通过读取数据
          fs.readFile('./user.html','utf8',function(html_err,html_data){
              res.end(html_data.replace(/{user}/,tag_user))
          })
      })
    }
}
