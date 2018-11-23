<template>
  <div class="addPhotos bgImg">
    <keep-alive>
    <bgBox class="bgBox">
      <router-link to="/admin"><p>首页</p></router-link>
      <ctitle>上传照片</ctitle>
      <!-- <uploader url="http://..." ></uploader> -->
      
      <div class="publish">
        <button class="blueBtn btn1" @click="upload()">上传</button>
        <!-- <button class="blueBtn btn2" @click="clear()">清空</button> -->
      </div>
    </bgBox>
    </keep-alive>
  </div>
</template>

<script>
import ctitle from '@/components/ctitle'
import bgBox from '@/components/bgBox'

export default {
  name: 'life',
  components:{bgBox,ctitle},
  props:['top'],
  data(){
    return{
    }
  },
  mounted(){
    // this.$http.get('/api/log')
    //   .then(response=>{
    //     let res = response.data;
    //     console.log(res)
    //     this.logs = res.data;
    //   })
  },
  methods:{
    upload(){
      if(this.article_content || this.article_title){
        if(confirm("是否确上传照片？")){
          this.$http.post('/admin/addLife',{
            article_title:this.article_title,
            article_content:this.article_content,
            isEvent:this.isEvent
          }).then((response)=>{
            let res = response.data;
            // if(res.status == 1){
            //   localStorage.setItem('userId',res.result.userId)
            //   this.$router.push('/admin')
            // }else{
            //   alert("用户名或密码错误！")
            // }
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
        }
      }else{
        alert("请编写内容！")
      }
      
    }
  }
}
</script>

<style lang='stylus' scoped>
.addPhotos
  .art_title 
    font-size 18px
    font-weight 600
    margin-top 10px
  .title_in
    line-height 30px
    border none
    padding 0 10px
    width 100%
    box-sizing border-box
    border-radius 5px
  .artType
    label 
      margin-right 10px
  .publish
    text-align center
    margin-top 20px
    .btn1 
      width 60%
      line-height 30px
      border-radius 4px
      font-size 18px
    .btn2 
      width 60px
      font-size 14px
      line-height 20px
      margin-left 10px
      background-color #fff
      border-radius 4px
      color #333
</style>
