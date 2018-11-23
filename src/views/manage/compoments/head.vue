<template>
<div class="topHead">
    <div class="logo">
      <img src='@/assets/images/logo.png' alt="">
    </div>
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
        {'text':'首页','link':'/'},
        {'text':'日志','link':'/life'},
        {'text':'相册','link':'/album'},
        {'text':'关于','link':'/about'},
        {'text':'留言册','link':'/messages'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.topHead
  .logo 
    color #fff
    font-size 20px
  .navgation  
      line-height 30px
      color #fff
      overflow hidden
      li 
        font-weight 600
        width 20%
        float left
        text-shadow 1px 1px 1px #aaa
</style>
