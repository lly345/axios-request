
const md5=require('md5')
const url=require('url')
const {whiteList}=require('../config')


module.exports.createToken=(uid)=>{
    const token=JSON.stringify({
        iss:'bw',
        uid:'1',
        time:new Date().getTime()
      }) 
  return md5(token) 
}

module.exports.requireAuth=(req,res,next)=>{
  const oUrl=url.parse(req.url)

  // 判断当前路由在白名单是否存在
  const inList= whiteList.filter(item=>{
       return item===oUrl.path
  })
  const authorization=req.headers.authorization
  if(authorization||inList.length){
    next()
  }else{
    res.statusCode=401
    res.json({
      code:0,
      msg:'没有权限访问！'
    })
  }
  
}