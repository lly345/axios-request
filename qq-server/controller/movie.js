
const mysql = require('mysql')
const url = require('url')
const queryString = require('querystring')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123321',
    database: 'db_1702f'
})
// 连接数据库

connection.connect()

// 电影数据
module.exports.MovieList = (req, res) => {
    const oUrl = url.parse(req.url)
    const oQuery = queryString.parse(oUrl.query)
    const { pagesize, pagecount } = oQuery
    console.log(pagesize, pagecount)
    const $sql = pagecount == undefined
        ? `select * from movie`
        : `select * from movie limit ${pagesize},${pagecount}`
    connection.query($sql, (error, result) => {
        if (error) {
            res.json({
                code: 0,
                error
            })
            return console.error(error)
        } else {
            connection.query('select count(*) as total from movie', (t_error, t_result) => {
                if (error) throw new Error(error);

                res.json({
                    code: 1,
                    result,
                    total: t_result
                })
            })

        }
    })
}
// 添加电影数据k
// module.exports.addMovie=(req,res)=>{
//     const {name,describe,actor,imgUrl,start_time,end_time,score}=req.body
//     const $sql='insert into movie (`name`, `describe`, `actor`, `imgUrl`, `start_time`, `end_time`, `score`) VALUES (`第三只眼 2`,`艾莉雅在孤兒院工作時，認識了青少女娜迪亞。娜迪亞說她聽見牆壁發出怪聲後，兩人試著找出來源，情況卻演變到難以收拾的程度`,`Jessica Mila,Nabilah Ratna Ayu Azalia,Sophia Latjuba`,`images/movie/EmqIn.jpg`,`2016-10-10 12:30:33`,`2019-10-10 12:30:30`,`9.8`)'
//     const $params=[name,describe,actor,imgUrl,start_time,end_time,score]
//     connection.query($sql,$params,(error,result)=>{
//        if(error){
//            res.json({
//                code:0,
//                error
//            })
//            return console.error(error)
//        }
//        res.statusCode=200;
//        res.json({
//            code:1,
//            sucsses:'inset sucsses'
//        })
//     })
// }

