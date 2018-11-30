<template>
  <div class="photos">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>{{albumName}}</ctitle>
      <ul class="adminNav" v-show="userId">
        <li><router-link :to="{ path: '/admin/addPhotos', query: {album: albumName}}">传照片</router-link></li>
        <li><router-link to="/admin/EditAlbum">相册管理</router-link></li>
      </ul>
      <div class="photoBox">
        <img class="photo" v-for="(img,index) in photos"
        :src="'/photos/'+albumName+'/'+img"
        preview="1"
        :alt="img"
        :key="index"
        preview-text="描述文字">
        <img src="" alt="" class="photo">
        <img src="" alt="" class="photo">
        <img src="" alt="" class="photo">
      </div>
      <p v-show="photos.length==0">暂无照片</p>
    </bgBox>
    <goTop v-show="top>100"></goTop>
  </div>
</template>

<script>
// :src="'/photos/'+albumName+'/'+img"
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
      photos:[],
      photoUrl:'',
      albumName:'',
      userId:localStorage.getItem('userId')
    }
  },
  mounted(){
    this.albumName = this.$route.query.name;
    this.$http.get('/api/photos',{
        params: {albumName: this.albumName}
    }).then(response=>{
      let res = response.data;
      this.photoUrl = res.url;
      this.photos = res.result;
      this.$previewRefresh();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.photos 
  min-height 100vh
  background #075498 url('../assets/images/top.jpg') no-repeat center top;
  background-size cover
  .adminNav
    float right
    li 
      float  left 
      margin 0 4px 
      color #fff
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
