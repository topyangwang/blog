const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./api')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(api)

app.use(express.static(path.resolve(__dirname+'../dist')))
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*',function(req,res){
  const html = fs.readdirSync(path.resolve(__dirname,'../dist.index.html'),'utf-8')
  res.send(html)
})

var server = app.listen(8088,()=>{
  const host = server.address().address
  const port = server.address().port
  console.log('success listen on http://%s:%s', host, port)
})
