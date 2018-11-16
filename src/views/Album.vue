<template>
  <div class="album">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>相册</ctitle>
      <ul class="albumItems">
        <li v-for="(item,index) in [1,1,1,1,1,1,1]" :key='index' class="albumItem" :class="{'reveal-left':index%3==0,'reveal-bottom':index%3==1,'reveal-right':index%3==2}">
            <router-link to="/photos">
              <img class="thumb" src="@/assets/images/top.jpg" alt="">
              <div class="describe">
                <p class="title">泰国</p>
                <!-- <p class="text">sdfasfd sfadsf jljadsf ljsldkfj slkfjdf ioejfdkj faskieowr fja kjsfier fjkasdfl</p> -->
              </div>
            </router-link>
        </li>
      </ul>
    </bgBox>

  </div>
</template>

<script>
import topHead from '@/components/topHead'
import bgBox from '@/components/bgBox'
import ctitle from '@/components/ctitle'
export default {
  name: 'life',
  components:{topHead,bgBox,ctitle},
  data(){
    return{
    }
  },
  mounted(){
    this.scrollReveal.reveal('.reveal-bottom', {
      duration: 1000,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '50px',
    });
    this.scrollReveal.reveal('.reveal-left', {
      duration: 1000,
      origin: 'left',
      reset: true,
      mobile: true,
      distance: '50px',
    });
    this.scrollReveal.reveal('.reveal-right', {
      duration: 1000,
      origin: 'right',
      reset: true,
      mobile: true,
      distance: '50px',
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.album 
  min-height 100vh
  background #075498 url('../assets/images/top.jpg') no-repeat center top;
  background-size cover
  .bgBox
    .ctitle
      line-height 30px
      display inline-block
      background-color #2a7497
      color #ffffff
      font-size 18px 
      text-align center
      font-weight 800
      border-top-right-radius 15px
      border-bottom-right-radius 15px
      border-left 4px solid #dae1e4
      box-shadow 1px 1px 1px #21566f
      margin-bottom 10px
      padding 0 20px
    .albumItems
      overflow hidden
      padding-left 1%
      .albumItem
        float left
        width 31%
        margin 1% 1%
        overflow hidden
        background-color #ededed
        box-shadow 2px 2px 1px #999
        cursor pointer
        border-radius 6px
        position relative
        .thumb
          width 100%
          vertical-align top
        .describe
            line-height 1
            position absolute
            color #fff
            bottom 0
            width 100%
            background-color rgba(0,0,0,.2)
          .title 
            text-align center
            font-weight 600
            line-height 1.5
            
            




</style>
