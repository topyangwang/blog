const models = require('./db')
const express = require('express')
const formidable = require('formidable')
const fs = require("fs")
const path = require('path')
//每个路由文件通过生成一个 express.Router 实例 router 并导出，通过 app.use 挂载到不同的路径
const router = express.Router();

let {lifeLogs,users} = models;

router.get('/api/log',(req,res) => {
  lifeLogs.find({article_type:{$ne:2}},(err,logs)=>{
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
  lifeLogs.find({article_type:{$ne:1}},(err,events)=>{
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
router.get('/api/albums',(req,res) => {
  fs.readdir('../photos', function(err,files){
    if(err){
      console.log(err);
      res.json({
        status:0,
        msg:'读取相册失败！',
        err:err
      })
    }else{
      res.json({
        status:1,
        msg:'',
        result:files
      })
    }
  })
})
router.get('/api/photos',(req,res) => {
  let albumName = req.query.albumName;
  let photosDir = '../photos/'+albumName;
  let absUrl = path.resolve(__dirname,photosDir)
  // console.log(absUrl)
  fs.readdir(photosDir, function(err,files){
    if(err){
      console.log(err);
      res.json({
        status:0,
        msg:'读取文相册失败！',
        result:err
      })
    }else{
      res.json({
        status:1,
        msg:'',
        url:absUrl,
        result:files
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
  let article_type = req.body.article_type;
  let put_date = req.body.put_date;
  let put_time = req.body.put_time;
  let article_thum = article_content.match(imgReg)?article_content.match(imgReg)[0]:'';
  // let article_thum = article_content.match(imgReg)[0].match(srcReg);
  // let article_thum_src = String(article_thum).substring(5);
  let article_abstract = article_content.replace(imgReg,'').substr(0,40);  //摘要

  let param = {
    article_title: article_title,
    article_content: article_content,
    article_type: article_type,
    article_time :  new Date,
    article_click : 0,
    article_like : 0,
    article_comment : 0,
    article_ip : req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    article_thum : article_thum,
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
router.post('/admin/addAlbum',(req,res)=>{
  let albumName = req.body.params.albumName;
  var targetDir = '../photos/'+albumName;
  if (!fs.existsSync(targetDir)) {
    fs.mkdir(targetDir,(err)=>{
      if(err){
        res.json({
          status:0,
          msg:"服务器创建失败！",
          result:err
        })
      }else{
        res.json({
          status:1,
          msg:"创建成功！",
          result:targetDir
        })
      }
    });
  }else{
    res.json({
      status:0,
      msg:"已存在此名称的相册",
      result:'已存在此名称的相册'
    })
  }
})
router.post('/admin/editAlbum',(req,res)=>{
  let oldAlbumName = req.body.params.oldAlbumName;
  let newAlbumName = req.body.params.newAlbumName;
  let oldAlbumDir = '../photos/'+oldAlbumName;
  let newAlbumDir = '../photos/'+newAlbumName;
  if (fs.existsSync(oldAlbumDir)) {
    fs.rename(oldAlbumDir, newAlbumDir, function(err) {
        if (err) {
            console.info(err);
            res.json({
                code: 0,
                msg: '操作失败'
            });
        } else { //上传成功，返回文件的相对路径                    
            res.json({
                code: 0,
                msg: '修改成功！',
                fileUrl: newAlbumDir
            });
        }
    });
  }else{
    res.json({
      status:0,
      msg:"不存在此名称的相册",
      result:'不存在此名称的相册'
    })
  }
})
router.post('/admin/addPhotos',(req,res) => {
    var form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, 'tmp'); //文件保存的临时目录为当前项目下的tmp文件夹    
    form.keepExtensions = true; //使用文件的原扩展名
    form.parse(req, (err, fields, file) => {
        if(err){throw err;} 
        console.log(file)
        //文件移动的目录文件夹，不存在时创建目标文件夹        
        let targetDir = '../photos/'+fields.album;
        if (!fs.existsSync(targetDir)) {fs.mkdir(targetDir);}

        let filePath = file.file.path;
        let fileName = file.file.name;
        let extName = fileName.substring(fileName.lastIndexOf('.')); //判断文件类型是否允许上传 

        if (('.jpg.jpeg.png.gif').indexOf(extName.toLowerCase()) === -1) {
            var err = new Error('此文件类型不允许上传');
            res.json({
                code: -1,
                message: '此文件类型不允许上传'
            });
            //删除此文件
            fs.unlink(filePath,function(error){
              if(error){
                  console.log(error);
                  return false;
              }
              console.log('删除文件成功');
            })
        } else { //重命名并移动文件           
            var targetFile = path.join(targetDir, fileName); //移动文件 
            console.log(targetFile)           
            fs.rename(filePath, targetFile, function(err) {
                if (err) {
                    console.info(err);
                    res.json({
                        code: -1,
                        message: '操作失败'
                    });
                } else { //上传成功，返回文件的相对路径                    
                    var fileUrl = '/phones/' + fileName;
                    res.json({
                        code: 1,
                        fileUrl: fileUrl
                    });
                }
            });
        }
    });
})
module.exports = router;