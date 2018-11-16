<template>
  <div class="goTop" @click="goTop">
    <i>^</i>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
      goTop(){
        document.body.scrollTop ? document.body.scrollTop=0 : document.documentElement.scrollTop=0;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.goTop 
    position fixed
    bottom 20px 
    right 20px
    width 50px
    height 50px
    background rgba(77, 131, 155, .8)
    border-radius 50%
    color #ffffff
    text-align center
    line-height 50px
</style>