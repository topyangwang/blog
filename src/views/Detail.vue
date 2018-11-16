<template>
  <div class="detail">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>第一次回家</ctitle>
      <p class="info">
        <span>2018-11-9</span>
        <span>4条评论</span>
        <span>100次阅读</span>
        <span>3人点赞</span>
      </p>
      <div class="article">
        asfdf
        asdf
        adsf
        asdf
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
    this.scrollReveal.reveal('.reveal-right', {
      duration: 1000,
      origin: 'right',
      reset: true,
      mobile: true,
      distance: '50px',
    });
  },
  methods:{
    great(){}
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
