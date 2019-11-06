
// 引入createToken
const {createToken} =require('../utils')
// const middleWare=bodyParse.urlencoded({extended:false})


// 创建数据库连接
const mysql=require('mysql')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123321',
    database:'db_1702f'
})

// 连接数据库

connection.connect()
 
module.exports.api=(req,res)=>{
    res.end('server is running')
}
module.exports.login=(req,res)=>{
    const {username,password} =req.body
    //   执行sql语句
    const $sql=`select * from user where username='${username}' and password='${password}'`
     connection.query($sql,(error,results)=>{
        //  console.log(111,results)
         if(error){
             res.statusCode=500
             res.json({
                 code:0,
                 msg:'用户名，密码错误'
             })
             return console.log(error)
         }else{
            //  发送token
             if(results.length){
                 const token=createToken(results[0].uid)
                 const $inset=`update user set token='${token}' where uid=${results[0].uid}`
                 connection.query($inset,(error,results)=>{
                    if(error){
                        return console.log(error)
                    }
                 })
             res.statusCode=200
                res.json({
                    code:1,
                    msg:'sucess',
                    token:token
                })
             }else{
             res.statusCode=401
                res.json({
                    code:0,
                    msg:'用户不存在'
                })
             return console.log(error)

             }
         }
     })
}