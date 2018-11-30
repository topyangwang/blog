<template>
  <div class="life">
    <topHead></topHead>
    <keep-alive>
    <bgBox class="bgBox">
      <ctitle>日志</ctitle>
      <ul class="adminNav" v-show="userId">
        <li><router-link to="/admin/addLife">写日志</router-link></li>
      </ul>
      <ul class="timeLine">
        <li v-for="(log,index) in logs" :key='index'>
          <router-link :to="{ path: '/detail', query: { id: log._id }}">
            <div class="time">
              <p class="p1">{{log.article_time | formatDate('hh:mm:ss')}}</p>
              <p class="p2">{{log.article_time | formatDate('MM月dd日')}}</p>
            </div>
            <div class="card reveal-right" data-scroll-reveal="wait 2.5s and then ease-in-out 100px"> 
              <p class="title">{{log.article_title}}</p>
              <div class="detail">
                <div v-if="log.article_thum" class="thumb" v-html="log.article_thum.replace('<img','<img width=100%')"></div>
                <div class="text">
                  <p v-html="log.article_abstract"></p>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </bgBox>
    </keep-alive>
    <goTop v-show="top>100"></goTop>
  </div>
</template>

<script>
import topHead from '@/components/topHead'
import ctitle from '@/components/ctitle'
import bgBox from '@/components/bgBox'
import goTop from '@/components/goTop'
export default {
  name: 'life',
  components:{bgBox,goTop,topHead,ctitle},
  props:['top'],
  data(){
    return{
      logs:[],
      userId:localStorage.getItem('userId')
    }
  },
  mounted(){
    const that = this;
    this.$http.get('/api/log')
      .then(response=>{
        let res = response.data;
        console.log(res)
        this.logs = res.data;
      })

  },
  updated(){
    if(this.logs.length!=0){
      this.scrollReveal.reveal('.reveal-right', {
        duration: 1000,
        origin: 'right',
        reset: true,
        mobile: true,
        distance: '50px',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.life 
  min-height 100vh
  background #075498 url('../assets/images/top.jpg') no-repeat center top;
  background-size cover
  .adminNav
    float right
    li 
      float  left 
      margin 0 4px 
      color #fff
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
      left 61px
    .time 
      font-size 12px
      color #075498 
      font-weight bolder
      width 55px
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
      margin 0 2% 0 80px
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
        .text 
          flex 2
          margin-left 10px
          font-size 12px
    li:nth-child(even) .card
        background-color #579dc5
    li:nth-child(even) .card:before
        border-right-color #579dc5
</style>
