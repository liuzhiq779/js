//追加的数据
var obj = {id:4,names:'罗宾',sex:'女',img:''};
var fs = require('fs');
fs.readFile('./hzw.json','utf8',function(err,data){
  if(err){
      console.log(err)
  }else{
       //console.log(data);
  // console.log(JSON.parse(data));
   var arr = JSON.parse(data)
   arr.push(obj);
   console.log(arr)
  }
  //先读再写
var str_json = JSON.stringify(arr);
fs.writeFile('./hzw.json',str_json, function(err){
  if(!err){
      console.log('添加数据成功')
  } 
})
})

