<template>
  <div class="photos">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>泰国</ctitle>
      <div class="photoBox">
        <img class="photo" v-for="(img,index) in imgs"
        :src="img.url"
        :alt="img.title"
        :key="index"
        preview="0" 
        preview-text="描述文字">
        <img src="" alt="" class="photo">
        <img src="" alt="" class="photo">
        <img src="" alt="" class="photo">
      </div>
    </bgBox>
    <goTop v-show="top>100"></goTop>
  </div>
</template>

<script>
import topHead from '@/components/topHead'
import bgBox from '@/components/bgBox'
import ctitle from '@/components/ctitle'
import goTop from '@/components/goTop'
export default {
  name: 'photos',
  components:{topHead,bgBox,ctitle,goTop},
   props:['top'],
  data(){
    return{
      imgs:[
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/3.jpg',
          title: 'pic1'
        },
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/1.jpg',
          title: 'pic2'
        },
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/3.jpg',
          title: 'pic1'
        },
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/1.jpg',
          title: 'pic2'
        },
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/3.jpg',
          title: 'pic1'
        },
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/1.jpg',
          title: 'pic2'
        },
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/3.jpg',
          title: 'pic1'
        },
        {
          url: 'https://826327700.github.io/vue-photo-preview/demo/1.jpg',
          title: 'pic2'
        }
      ]
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.photos 
  min-height 100vh
  background #075498 url('../assets/images/top.jpg') no-repeat center top;
  background-size cover
  .photoBox 
    display flex
    align-items top 
    justify-content space-around
    flex-wrap wrap
    .photo 
      width 30%
      height 100%
      margin 5px 0
    

</style>
