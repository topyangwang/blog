const mongoose = require('mongoose')
//连接数据
mongoose.connect('mongodb://47.93.45.73:27017')

const db = mongoose.connection
db.once('error',()=>{
  console.error('mongo connection error');
  return;
})
blur.once('open',()=>{
  console.log('mongo connection successed!')
})

//定义模式
const logSchema = mongoose.Schema({
  article_title : String,
  article_time : Date,
  rticle_click : Number,
  article_like : Number,
  article_ip : String,
  article_content : String
})

//定义模型
const Models = {
  liftLog: mongoose.model('lifeLog',logSchema)
}

module.exports = Models;