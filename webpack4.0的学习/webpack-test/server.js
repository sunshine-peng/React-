

const express = require ('express')
var app = express()
app.use(express.static('build',{
    maxAge:1000*3600
}))
app.listen(3002,function(){
    console.log('服务已起动。。。。')
})