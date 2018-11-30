const mongoose = require('mongoose')
//连接数据
mongoose.connect('mongodb://47.93.45.73:27017/childBlog',{useNewUrlParser:true})

const db = mongoose.connection
db.once('error',()=>{
  console.error('mongo connection error!!');
  return;
})
db.once('open',()=>{
  console.log('mongo connection successed!')
})

//定义模式

//日志和大事
const logSchema = new mongoose.Schema({
  article_title : String,
  article_content : String,
  article_type : Number,
  article_time : Date,
  article_click : Number,
  article_like : Number,
  article_comment : Number,
  article_ip : String,
  article_thum : String,  //缩略图
  article_abstract : String  //梗概
})
//管理账户
const userSchema = new mongoose.Schema({
  serName:String,
  userPwd:String
})

//定义模型
const Models = {
  lifeLogs: mongoose.model('lifeLog',logSchema),
  users: mongoose.model('user',userSchema)
}

module.exports = Models;

