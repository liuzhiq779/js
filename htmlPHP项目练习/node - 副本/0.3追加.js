const fs = require('fs')

fs.readFile('./a.txt','utf8',function(err,data){
    if(err){
        throw err
    }else{
        //拼接写入内容
        let newStr = data + '你好牛逼啊'
        fs.writeFile('./a.txt',newStr,function(err){
            if(!err){
                console.log("写入成功")
            }else{
                console.log(err)
            }
        })
        console.log(data)
    }
})