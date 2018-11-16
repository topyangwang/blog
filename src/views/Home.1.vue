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
      <p class="title">成长大事迹</p>
      <ul class="events">
        <li>
          <a href="#">
          <p class="time">2018年11月7日</p>
          <p class="event">第一次回老家</p>
          </a>
        </li>
        <li>
          <a href="#">
          <p class="time">2018年11月7日</p>
          <p class="event">第一次回老家</p>
          </a>
        </li>
        <li>
          <a href="#">
          <p class="time">2018年11月7日</p>
          <p class="event">第一次回老家</p>
          </a>
        </li>
        <li>
          <a href="#">
          <p class="time">2018年11月7日</p>
          <p class="event">第一次回老家</p>
          </a>
        </li>
        <li>
          <a href="#">
          <p class="time">2018年11月7日</p>
          <p class="event">第一次回老家</p>
          </a>
        </li>
      </ul>
    </div>
    <goTop v-show="top>100"></goTop>
  </div>
</template>

<script>
// @ is an alias to /src
import goTop from '@/components/goTop'
import navigation from '@/components/navigation'
export default {
  name: 'home',
  components: {goTop,navigation},
  props:['top'],
  data(){
    return{
      herderH: 400 //首页头部高度
    }
  },
  mounted(){
      this.herderH = this.$refs.head.clientHeight;
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
    margin-bottom 100px
    .title 
      font-size 40px
      line-height 100px
      text-align center
      font-weight 400
      color #000
    .events
      overflow hidden 
      li 
        margin-bottom 20px
        width 50%
        clear both
        position relative
        &:before 
          content ''
          display inline-block
          width 14px
          height 14px 
          border 2px solid #999
          border-radius 50%
          position absolute
          top 8px
          z-index 10
          background-color #fff
        &:after
            content ''
            display inline-block
            width 2px 
            height 66px
            background-color #999
            position absolute
            top -10px
        &:nth-child(odd)
          float left
          text-align right
          &:before 
            right -10px 
        &:nth-child(even)
          float right
          text-align left 
          &:before 
            left -8px
        &:hover 
          .time,&:before 
            color rgb(0, 173, 239)
            border-color rgb(0, 173, 239)
        .time 
          font-size 12px
          color #999
          padding 0 30px
        .event 
          font-size 18px
          line-height 30px
          padding 0 30px
        @media screen and (max-width 768px)
          width 80%
          margin-left 20%
          &:nth-child(odd)
            text-align left
            &:before 
              left -8px 
          &:nth-child(even)
            float left


</style>

