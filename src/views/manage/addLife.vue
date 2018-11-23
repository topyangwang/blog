<template>
  <div class="addLife bgImg">
    <keep-alive>
    <bgBox class="bgBox">
      <router-link to="/admin"><p>首页</p></router-link>
      <ctitle>写日志</ctitle>
      <p class="art_title">标题:</p>
      <input class="title_in" type="text" v-model="article_title">
      <p class="art_title">内容:</p>
      <vue-html5-editor :content="article_content" @change="updateContent"></vue-html5-editor>
      <div class="art_title">日期: <input class="date_in" type="date"></div>
      <div class="art_title artType">
        <input id="log" type="radio" name="artType" :checked="artType==1" @click="artType=1"><label for="log">日志</label>
        <input id="event" type="radio" name="artType" :checked="artType==2" @click="artType=2"><label for="event">大事迹</label>
        <input id="all" type="radio" name="artType" :checked="artType==3" @click="artType=3"><label for="all">同时</label>
      </div>
      
      <div class="publish">
        <button class="blueBtn btn1" @click="publish()"  >发表</button>
        <button class="blueBtn btn2" @click="clear()">清空</button>
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
      logs:[],
      article_content:'',
      article_title:'',
      artType:1
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
    updateContent(e=''){
      this.article_content = e;
    },
    clear(){
      this.article_title = '';
      this.article_content = '';
    },
    publish(){
      if(this.article_content || this.article_title){
        if(confirm("是否确认发表文章？")){
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
.addLife
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
