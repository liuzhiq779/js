//操作json数据
//把这些数据写入json中
//向hzw.json中添加一条数据{id:'4',names:'罗宾',sex:'女',img:''};
//删除hzw.json文件中id值为2的数据
//将hzw.json文件中id为3的数据中的names改为‘女帝’
var fs = require('fs') 
//把这些数据写入json中
var str = [
    {id:1,names:'路飞',sex:'男',img:''},
    {id:2,names:'乌索普',sex:'男',img:''},
    {id:3,names:'娜美',sex:'女',img:''},
]
console.log(str)
var jsonstr = JSON.stringify(str)
console.log(jsonstr)
fs.writeFile('./hzw.json',jsonstr,function(err){
    if(!err){
        console.log("写入成功")
    }else{
        console.log(err)
    }
})