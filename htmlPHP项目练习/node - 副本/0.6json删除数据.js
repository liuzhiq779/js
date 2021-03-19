//删除hzw.json文件中id值为2的数据
var fs = require('fs')
//读取数json据
fs.readFile('./hzw.json','utf8',function(err,data)  {
    //console.log(data);
    //将字符串转化为数组
    var  arr = JSON.parse(data)
    var  newArr = [];
   // console.log(arr)
    for(let i =0;i<arr.length;i++){
        if(arr[i].id !== 2){
        newArr.push(arr[i])
        }
    }
    var newJson = JSON.stringify(newArr);
    fs.writeFile('./hzw.json',newJson,function(err){
        console.log('删除成功')
    })
})