<template>
  <div class="navigation">
    <ul>
        <li v-for = "(nav,index) in navs" :key="index">
          <router-link :to='nav.link'>{{nav.text}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data(){
    return{
      navs:[
        {'text':'首页','link':'/'},
        {'text':'日志','link':'/life'},
        {'text':'相册','link':'/album'},
        {'text':'关于','link':'/about'},
        {'text':'留言册','link':'/message'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.navigation
  position fixed
  z-index 1000
  width 100%
  height 50px
  background-color rgba(113, 204, 240,.9)
  border-bottom-left-radius 10px
  border-bottom-right-radius 10px
  box-shadow 1px 1px 1px #3976AD
  ul 
    float left
    line-height 50px
    color #fff
    li 
      padding 0 10px 
      font-weight 600
      float left
</style>
