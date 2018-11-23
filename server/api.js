const models = require('./db')
const express = require('express')
//每个路由文件通过生成一个 express.Router 实例 router 并导出，通过 app.use 挂载到不同的路径
const router = express.Router();

let {lifeLogs,events,users} = models;

router.get('/api/log',(req,res) => {
  console.log("log")
  // let lifeLog = new lifeLogs({
  //   article_title : "回家",
  //   article_time :  new Date(),
  //   article_click : 22,
  //   article_like : 22,
  //   article_ip : "",
  //   article_thum:'p03.jpg'
  //   article_content : "aaaasdeqdsftderewdsfrwe"
  // });

  // lifeLog.save(function (err, res) {
  //     if (err) {
  //         console.log("Error:" + err);
  //     }
  //     else {
  //         console.log("Res:" + res);
  //     }
  // });

  lifeLogs.find((err,logs)=>{
    if(err){
      res.send(err);
    } else {
      res.json({
        status:1,
        msg:'',
        data:logs
      })
    }
  })
})

router.get('/api/detail',(req,res) => {
  let id = req.query.id;
  lifeLogs.findById(id,(err,article)=>{
    if(err){
      res.send(err);
    } else {
      res.json({
        status:1,
        msg:'',
        data:article
      })
    }
  })
})
router.get('/api/events',(req,res) => {
  events.find((err,events)=>{
    if(err){
      res.send(err);
    } else {
      res.json({
        status:1,
        msg:'',
        data:events
      })
    }
  })
})

router.post('/api/login',(req,res) => {
  let param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
  users.findOne(param,(err,doc)=>{
    if(err){
      res.json({
        status:0,
        msg:err
      })
    }else{
      if(doc){
        res.cookie('userId',doc._id,{
          path:'/',
          maxAge:1000*60*60*24*30*12
        })
        // res.cookie('userName',doc.userName,{
        //   path:'/',
        //   maxAge:1000*60*60*24*30*12
        // })
        res.json({
          status:1,
          msg:"",
          result: {
            userName:doc.userName,
            userId:doc._id
          }
        })
      }else{
        res.json({
          status:0,
          msg:"",
          result:'用户名或密码错误！'
        })
      }
    }
  })

})

router.post('/admin/addLife',(req,res) => {
  let imgReg = /<img(.*?)src=\"(.*?)\"(.*?)>/ig
  let srcReg = /\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/i

  let article_title = req.body.article_title;
  let article_content = req.body.article_content;
  // let article_thum = article_content.match(imgReg)[0].match(srcReg);
  // let article_thum_src = String(article_thum).substring(4);
  let article_abstract = article_content.replace(imgReg,'').substr(0,40);  //摘要

  let param = {
    article_title: article_title,
    article_content: article_content,
    article_time :  new Date(),
    article_click : 0,
    article_like : 0,
    article_comment : 0,
    article_ip : req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    article_thum_src : '',
    article_abstract : article_abstract
  }

  let lifeLog = new lifeLogs(param);
  lifeLog.save(function (err, doc) {
      if (err) {
        res.json({
          status:0,
          msg:err
        })
      } else {
        console.log(doc)
        res.json({
          status:1,
          msg:"",
          result: {
            article_id: doc._id
          }
        })
      }
  });
})

module.exports = router;