<template>
    <div class="main">
      <div class="container">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import navigation from '@/components/navigation'
export default {
  name: 'bgBox',
  data(){
    return{
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
  .main 
    background-color rgba(255,255,255,.2)
    padding 10px
    margin 10px
    .container
      background-color rgba(255,255,255,.3)
      padding 20px 10px
      min-height 200px
</style>
