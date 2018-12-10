<template>
  <div class="about">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>关于</ctitle>
      <p class="info">
        <span>2018-11-9</span>
        <span>4条评论</span>
        <span>100次阅读</span>
        <span>3人点赞</span>
      </p>
      <div class="article">
        <p style="text-indent:20px">大家好，我叫杨皓文。是妈妈给我取得这个名字，据妈妈说爸爸为了给我取名思索了好久，还研究了五行，还是纠结不定，最后果断的妈妈给我想出了这个名字！我很喜欢！！</p> 
        <p style="text-indent:20px">这个博客是爸爸纯手工敲出来的，虽然很粗糙，但我觉得满满得都是爸比得爱！！</p> 
        <div style="text-indent:20px">对了，最后还要说明一下，虽然爸比很努力了，但是他的艺术细胞和审美能力都已经枯萎了，所以不得不借鉴了杨青阿姨得博客主题，在这附上地址
          <p style="overflow:hidden;text-indent:0"><a href="https://www.yangqq.com/skin/2017/index.html">https://www.yangqq.com/skin/2017/index.html</a></p>
          。非常感谢杨青阿姨！</div> 

 
      </div>
      <div class="like">
        <vue-star animate="animated rubberBand" color="#F05654">
          <a slot="icon" class="" @click="great">赞一下！<span>(30)</span></a>
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
    }
  },
  mounted(){
  },
  methods:{
    great(){}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.about 
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
