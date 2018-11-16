<template>
  <div class="home">
    <navigation v-show="top>herderH" ></navigation>
    <header class="head" ref = "head">
      <div class="shade">
        <div class="content">
          <img class="avatar" src="../assets/images/cover_bg_3.jpg" alt="avatar">
          <p class="name"> <span class="text">Yang hao wen</span> </p>
          <p class="role" @click="addtop()"> <span class="text">baby</span> </p>
          <ul class="nav">
            <router-link to="/"><li>
                <i>aaa</i>
                <p>首页</p>
            </li></router-link>
            <router-link to="/life"><li>
                <i>aaa</i>
                <p>日志</p>
            </li></router-link>
            <a href="#"><li>
                <i>aaa</i>
                <p>照片</p>
            </li></a>
            <a href="#"><li>
                <i>aaa</i>
                <p>视频</p>
            </li></a>
            <router-link to='/about'><li>
                <i>aaa</i>
                <p>关于</p>
            </li></router-link>
          </ul>
        </div>
      </div>
    </header>
    <div class="timeStream">
      <bgBox class="bgBox">
          <p class="floor">成长大事迹</p>
          <ul class="timeLine">
            <li v-for="(i,index) in [1,2,3,4,4,4,4,4,4,4,4]" :key='index'>
              <router-link to="/detail">
                <div class="time">
                  <p class="p1">2018</p>
                  <p class="p2">11月8日</p>
                </div>
                <div class="card reveal-right">
                  <p class="title">第一次回老家</p>
                  <div class="detail">
                    <div class="thumb"><img src="../assets/images/p03.jpg" alt=""></div>
                    <div class="text">
                      <p>asdfdsfds adsfas adsfdsfds</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
      </bgBox>
    </div> 
    
    <goTop v-show="top>100"></goTop>
  </div>
</template>

<script>
// @ is an alias to /src
import goTop from '@/components/goTop'
import navigation from '@/components/navigation'
import bgBox from '@/components/bgBox'
export default {
  name: 'home',
  components: {goTop,navigation,bgBox},
  props:['top'],
  data(){
    return{
      herderH: 400 //首页头部高度
    }
  },
  mounted(){
    this.herderH = this.$refs.head.clientHeight;
    this.scrollReveal.reveal('.reveal-right', {
      duration: 1000,
      origin: 'right',
      reset: true,
      mobile: true,
      distance: '50px',
    });
  },
  methods:{
  }
}
</script>
<style lang="stylus" scoped>
//  #00ADEF
  header 
    height 100vh
    min-height 400px
    background #D9F2EF url('../assets/images/cover_bg_3.jpg') no-repeat 0 0
    background-size cover
    .shade 
      position absolute 
      overflow hidden
      min-height 400px
      top 0
      bottom 0
      left 0
      right 0
      background rgba(0, 173, 239,.9)
      display flex
      justify-content center
      align-items center
      .content
        text-align: center
        color #ffffff
        .avatar 
          width 200px
          height 200px
          border-radius 50%
        .name 
          transform rotate(-5deg)
          .text
            font-size 50px
            font-family "Kaushan Script",cursive
            font-weight 300
            line-height 1.3
            letter-spacing -2px
            word-spacing -10px
            position relative
            @media screen and (max-width 768px)
              font-size 30px
              word-spacing 0
              letter-spacing 0
            &:before, &:after
              content ''
              width 30px
              height 4px
              background-color #ffffff
              position absolute
              top 25px
            &:before
              left -50px
            &:after
              right -50px
            @media screen and (max-width 768px)
             &:before, &:after
              top 15px
        .role 
          .text 
            font-size 16px
            font-weight 300
            color #ffffff
        .nav 
          padding 0
          li 
            display inline-block
            margin 0 2%
  .timeStream
    padding-bottom 20px
    padding-top 1px
    background-color #075498
    .floor 
      font-size 30px
      text-align center
      font-weight 400
      color #fff
      margin-bottom 20px
    .timeLine
      overflow hidden
      position relative
      li 
        &:hover .time 
          background-color #afdcf8
          border-top-left-radius 10px
          border-bottom-left-radius 10px
          .p1 
            color #fff
      li:not(:last-child)
        margin-bottom 15px
      &:before
        content ''
        width 4px 
        background-color #afdcf8
        position absolute
        top 0
        bottom 0 
        left 56px
      .time 
        font-size 12px
        color #075498 
        font-weight bolder
        width 50px
        position absolute
        text-align center
        padding-right 6px
        transition .5s background-color ease,1s border-top-left-radius ease,1s border-bottom-left-radius ease
        &:after
          content ''
          width 8px
          height 8px
          border-radius 50%
          background-color #46a4da
          box-shadow 0 0 0 3px #afdcf8
          position absolute
          top 14px 
          right -6px
      .card 
        margin 0 2% 0 78px
        padding 1% 2%
        background-color #3594cb
        position relative
        border-radius 6px
        min-height 50px
        color #fff
        &:before
          content ''
          width 0
          height 0
          border 8px solid transparent 
          border-right 8px solid #3594cb
          position absolute
          top 10px 
          right 100%
        .title 
          font-weight 600 
          font-size 14px
          text-shadow rgba(7, 84, 152, 0.71) 1px 1px 1px
        .detail 
          margin-top 10px
          display flex
          .thumb 
            flex 1
            img 
              width 100%
          .text 
            flex 2
            margin-left 10px
            font-size 12px
      li:nth-child(even) .card
          background-color #579dc5
      li:nth-child(even) .card:before
          border-right-color #579dc5
            

</style>

