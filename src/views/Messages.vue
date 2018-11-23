<template>
  <div class="messages">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>留言</ctitle>

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
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.messages
  min-height 100vh
  background #075498 url('../assets/images/top.jpg') no-repeat center top;
  background-size cover
</style>
