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
// app.get('*', function (req, res) {
//   let html = fs.readFileSync(path.resolve('./' + '../dist/index.html'), 'utf-8')
//   res.send(html)
// })

var server = app.listen(8088,()=>{
  let port = server.address().port;
  console.log('app listening at http://%s:%s','localhost',port);
})
