//将hzw.json文件中id为3的数据中的names改为‘女帝’
var fs = require('fs')
fs.readFile('./hzw.json','utf8',function(err,data){
    console.log(data )
    //将字符串转化为数组
    var arr = JSON.parse(data)
    console.log(arr)
    // 循环遍历数据
    for(var i=0;i<arr.length;i++){
        if(arr[i].id ===3){
            arr[i].names = '女帝'
        }
    }
    var newJson = JSON.stringify(arr);
    fs.writeFile('./hzw.json',newJson,function(err){
       // console.log('修改成功')
    })
})