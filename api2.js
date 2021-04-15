const express = require('express')     // 引入模块
const mysql = require('mysql')
const app = express()                  // 调用express
const port = 8080                       // 服务运行的端口


    //设置连接参数
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'vue2008'
    });

// 查询用户的接口  /user?name="xxx"

app.get('/user',function(request,response){
    console.log(request.query);
    let uname = request.query.name      // 获取name参数
    let email = request.query.email

    // 拼接sql语句 
    const sql = `select * from p_users where user_name='${uname}' and email='${email}'`
    console.log(sql)

    // 数据库查询用户信息
    connection.query(sql,function(error,result){
        // if(error){
        //     console.log(error);
        //     return;
        // }
        //判断 是否找到记录
        console.log("记录条数：",result.length)
        if(result.length>0){    // 有记录
            let data = {
                errno: 30001,
                msg: "找到记录"
            }
            response.send(JSON.stringify(data))
        }else{         // 无记录
            let data = {
                errno: 40001,
                msg: "没有找到记录"
            }
            response.send(JSON.stringify(data))
        }
    })

    // response.send("访问了/user")
})

app.get('/',function(req,res){
    console.log(req)
    res.send("Hello API")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})