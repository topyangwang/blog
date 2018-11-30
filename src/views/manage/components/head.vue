<template>
<div class="manHead">
    <ul class="navgation">
        <li v-for = "(nav,index) in navs" :key="index">
          <router-link :to='nav.link'>{{nav.text}}</router-link>
        </li>
    </ul>
</div>
   
</template>

<script>
export default {
  name: 'topHead',
  data(){
    return{
      navs:[
        {'text':'博客首页','link':'/'},
        {'text':'写日志','link':'/admin/addLife'},
        {'text':'传照片','link':'/admin/addPhotos'},
        {'text':'管理相册','link':'/admin/EditAlbum'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.manHead
  .navgation  
      line-height 30px
      color #fff
      overflow hidden
      li 
        font-weight 600
        float left
        padding 0 10px 
        text-shadow 1px 1px 1px #aaa
</style>
