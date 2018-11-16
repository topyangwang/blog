<template>
  <div class="ctitle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ctitle',
  data(){
    return{
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.ctitle
  line-height 30px
  display inline-block
  background-color #2a7497
  color #ffffff
  font-size 18px 
  text-align center
  font-weight 800
  border-top-right-radius 15px
  border-bottom-right-radius 15px
  border-left 4px solid #dae1e4
  box-shadow 1px 1px 1px #21566f
  margin-bottom 10px
  padding 0 20px
</style>
