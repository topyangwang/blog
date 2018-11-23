<template>
  <div class="home">
    <navigation v-show="top>herderH" ></navigation>
    <header class="head" ref = "head">
      <div class="shade">
        <div class="content">
          <p class="role" @click="addtop()"> <span class="text">mother</span> </p>
          <ul class="nav">
            <router-link to="/"><li>
                <p>博客</p>
            </li></router-link>
            <router-link to="/admin/addLife"><li>
                <p>写日志</p>
            </li></router-link>
            <router-link to="/admin/EditLife"><li>
                <p>管理日志</p>
            </li></router-link>
            <router-link to="/admin/addPhotos"><li>
                <p>传照片</p>
            </li></router-link>
            <router-link to="/admin/EditLife"><li>
                <p>传视频</p>
            </li></router-link>
            <router-link to="/admin/EditLife"><li>
                <p>管理留言</p>
            </li></router-link>
          </ul>
        </div>
      </div>
    </header>
    <div class="timeStream">
      <bgBox class="bgBox">
          <p class="floor">统计</p>
          
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
      herderH: 400, //首页头部高度
      events:[]
    }
  },
  mounted(){
    this.herderH = this.$refs.head.clientHeight;
    
    // this.$http.get('/api/events')
    //   .then(response=>{
    //     let res = response.data;
    //     this.events = res.data;
    //     console.log(this.events)
    //   })
  },
  methods:{
  }
}
</script>
<style lang="stylus" scoped>
  header 
    height 100vh
    min-height 400px
    background #D9F2EF url('../../assets/images/cover_bg_3.jpg') no-repeat 0 0
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
        width 100%
        .role 
          .text 
            font-size 16px
            font-weight 300
            color #ffffff
        .nav 
          padding 0
          overflow hidden
          margin 0 auto
          li 
            display inline-block
            width 24%
            padding 4px 0
            border 1px solid #fff
            margin 1%
            border-radius 4px
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

