<template>
  <div class="album">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>相册</ctitle>
      <ul class="adminNav" v-show="userId">
        <li><router-link :to="{ path: '/admin/addPhotos'}">传照片</router-link></li>
        <li><router-link to="/admin/EditAlbum">相册管理</router-link></li>
      </ul>
      <ul class="albumItems">
        <li v-for="(item,index) in albums" :key='index' class="albumItem" :class="{'reveal-left':index%3==0,'reveal-bottom':index%3==1,'reveal-right':index%3==2}">
            <router-link :to="{ path: '/photos', query: { name: item }}">
              <img class="thumb" src="@/assets/images/top.jpg" alt="">
              <div class="describe">
                <p class="title">{{item}}</p>
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
      albums:[],
      userId:localStorage.getItem('userId')
    }
  },
  mounted(){
    this.$http.get('/api/albums')
      .then(response=>{
        let res = response.data;
        console.log(res)
        this.albums = res.result;
      })
  },
  updated(){
    if(this.albums.length!=0){
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.album 
  min-height 100vh
  background #075498 url('../assets/images/top.jpg') no-repeat center top;
  background-size cover
  .bgBox
    .adminNav
      float right
      li 
        float  left 
        margin 0 4px 
        color #fff
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
