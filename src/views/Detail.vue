<template>
  <div class="detail">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>{{article.article_title}}</ctitle>
      <p class="info">
        <span>2018-11-9</span>
        <span>{{article.article_comment}}条评论</span>
        <span>{{article.article_click}}次阅读</span>
        <span>{{article.article_like}}人点赞</span>
      </p>
      <div class="article" v-html="article.article_content"></div>
      <div class="like">
        <vue-star animate="animated tada" color="#F05654">
          <a slot="icon" class="fa fa-thumbs-up" @click="great"> 赞 !<span>({{article.article_like}})</span></a>
        </vue-star>
      </div>
    </bgBox>
  </div>
</template>

<script>
import topHead from '@/components/topHead'
import bgBox from '@/components/bgBox'
import ctitle from '@/components/ctitle'
import VueStar from 'vue-star'
export default {
  name: 'life',
  components:{topHead,bgBox,ctitle,VueStar},
  data(){
    return{
      article:''
    }
  },
  mounted(){
    this.scrollReveal.reveal('.reveal-right', {
      duration: 1000,
      origin: 'right',
      reset: true,
      mobile: true,
      distance: '50px',
    });
    this.$http.get('/api/detail',{
        params: {id: this.$route.query.id}
    }).then(response=>{
      let res = response.data;
      console.log(res)
      this.article = res.data;
      this.article.article_content=this.article.article_content.replace('<img ','<img style="max-width:100%"')
      console.log(this.article.article_content)
    })
  },
  methods:{
    great(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.detail 
  min-height 100vh
  background #075498 url('../assets/images/top.jpg') no-repeat center top;
  background-size cover
  .bgBox
    .info
      color #666 
      font-size 12px
      text-align right 
      span 
        margin 0 1%
    .article
      padding 10px
    .like
      height 30px
      color #666
      line-height 30px
      position relative
      .VueStar
        top -34px
        right 0
        .VueStar__ground
          width auto!important

</style>
