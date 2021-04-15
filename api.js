const express = require('express')     // 引入模块
const mysql = require('mysql')
const app = express()                  // 调用express
const port = 8080                       // 服务运行的端口

app.get('/user',function(req,res){
    // 向客户端响应数据
    res.send("欢迎访问用户接口")
})

app.get('/list',(req,res)=>{
    //设置连接参数
    // var connection = mysql.createConnection({
    //     host     : 'localhost',
    //     user     : 'root',
    //     password : 'root',
    //     database : 'vue2008'
    // });
    //创建连接
    connection.connect();

    // 执行 query
    connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {
        // console.log(error)
        // 获取查询的结果
        // console.log(results)
        res.send(JSON.stringify(results)) 
    });

    connection.end();

})

app.get('/', (req, res) => {

    const list = [
        {
            userid: 1001,
            name: "jiji",
            age: 20
        },
        {
            userid: 1002,
            name: "lisa",
            age: 23
        },
        {
            userid: 1003,
            name: "wangyu",
            age: 21
        }
    ]

    // 将数组转换为JSON字符串
    res.send(JSON.stringify(list))
    // res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})