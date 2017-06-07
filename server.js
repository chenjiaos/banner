'use strict'
const app=require('express')()
const bodyParser=require('body-parser')

let mess=[]
app.use(bodyParser.urlencoded({extended:false}))
app.use('/register',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    mess.push(req.body)
    console.log(mess)
    res.end('注册成功,请登录')
})
app.use('/login',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    for(let i=0;i<mess.length;i++){
        if(req.body.username===mess[i].username&&req.body.password===mess[i].password){
            res.end('登录成功')
        }
    }
    res.end('用户名或密码错误，请重试')
})
app.listen(4000)