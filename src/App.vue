<template>
  <div id="app">
    <router-view :top='top'></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      top:0
    }
  },
  mounted(){
    // window.addEventListener('scroll',()=>{
    //   this.top = document.documentElement.scrollTop || document.body.scrollTop;
    // })
  }
}
</script>

<style lang="stylus">
#app 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
html,body,p,ul
  margin 0
  padding 0
.fl 
  float left
a 
  text-decoration none
  color inherit  
ul 
  list-style none 
.bgImg
  min-height 100vh
  background #075498 url('./assets/images/top.jpg') no-repeat center top;
  background-size cover
.blueBtn
  background-color #3976AD
  border 1px solid #075498
  color #fff
</style>
