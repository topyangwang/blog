<template>
  <div class="editAlbum">
    <manHead></manHead>
    <bgBox class="bgBox">
      <ctitle>相册</ctitle>
      <el-button class="editBtn" icon="fa fa-cog" @click="isEdit=!isEdit"> {{isEdit?'取消':'编辑'}}</el-button>
      <ul class="albumItems">
        <li v-for="(item,index) in albums" :key='index' class="albumItem" :class="{'reveal-left':index%3==0,'reveal-bottom':index%3==1,'reveal-right':index%3==2}">
            <router-link :to="{ path: '/photos', query: { name: item }}">
              <img class="thumb" src="@/assets/images/p03.jpg" alt="">
              <div class="describe">
                <p class="title">{{item}}</p>
                <!-- <p class="text">sdfasfd sfadsf jljadsf ljsldkfj slkfjdf ioejfdkj faskieowr fja kjsfier fjkasdfl</p> -->
              </div>
            </router-link>
            <i v-show="isEdit" class="removeAlbum fa fa-pencil" @click="editAlbum(item)"></i>
        </li>
        <li v-show="isEdit" class="albumItem addAlbum" @click="addAlbum()">
            <i class="el-icon-plus"></i>
        </li>
      </ul>
    </bgBox>
    <el-dialog :title="addAlbumBoxTitle" :visible.sync="addAlbumBox">
      <el-form :model="newAlbum">
        <el-form-item label="相册名称">
          <el-input v-model="newAlbum.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addAlbumBox = false">取 消</el-button>
        <el-button type="primary" @click="doAlbum()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import manHead from '@/views/manage/components/head'
import bgBox from '@/components/bgBox'
import ctitle from '@/components/ctitle'
export default {
  name: 'life',
  components:{manHead,bgBox,ctitle},
  data(){
    return{
      albums:[],
      isEdit:false,
      addAlbumBox:false,
      addAlbumBoxTitle:'添加相册',
      doAlbumName:'',
      newAlbum:{
        name:''
      },
    }
  },
  mounted(){
    this.scrollReveal.reveal('.reveal-bottom', {
      duration: 1000,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '50px',
    });
    this.scrollReveal.reveal('.reveal-left', {
      duration: 1000,
      origin: 'left',
      reset: true,
      mobile: true,
      distance: '50px',
    });
    this.scrollReveal.reveal('.reveal-right', {
      duration: 1000,
      origin: 'right',
      reset: true,
      mobile: true,
      distance: '50px',
    });
    this.getAlbums();
  },
  methods:{
    getAlbums(){
      this.$http.get('/api/albums')
      .then(response=>{
        let res = response.data;
        this.albums = res.result;
      })
    },
    addAlbum(){
      this.addAlbumBox=true;
      this.addAlbumBoxTitle='添加相册';
    },
    editAlbum(albumName){
      this.addAlbumBox=true;
      this.addAlbumBoxTitle='修改名称';
      this.doAlbumName=albumName;
    },
    doAlbum(){
      this.addAlbumBox=false;
      if(this.addAlbumBoxTitle=='添加相册'){
        this.$http.post('/admin/addAlbum',{
          params: {albumName: this.newAlbum.name}
        }).then((response)=>{
          let res = response.data;
          if(res.status==0){
            this.$message({
              type: 'warning',
              message: res.msg
            });
          }else{
            this.$message({
              type: 'success',
              message: res.msg
            });
            this.getAlbums();
          }
        })
      }else{
        this.$http.post('/admin/editAlbum',{
          params: {
            oldAlbumName: this.doAlbumName,
            newAlbumName:this.newAlbum.name
          }
        }).then((response)=>{
          let res = response.data;
          if(res.status==0){
            this.$message({
              type: 'warning',
              message: res.msg
            });
          }else{
            this.$message({
              type: 'success',
              message: res.msg
            });
            this.getAlbums();
          }
        })
      }
      this.newAlbum.name=''
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.editAlbum 
  min-height 100vh
  background #075498 url('../../assets/images/top.jpg') no-repeat center top;
  background-size cover
  .bgBox
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
    .editBtn
      float right
      margin-right 4px
      height 30px
      padding 0 4px
    .albumItems
      padding-left 1%
      position relative
      &:after
        content ""
        clear both
        display block
      .albumItem
        float left
        width 31%
        height 60px
        margin 1% 1%
        background-color #ededed
        box-shadow 2px 2px 1px #999
        cursor pointer
        border-radius 6px
        position relative
        .thumb
          width 100%
          height 60px
          display inline-block
          vertical-align top
        .describe
            line-height 1
            position absolute
            color #fff
            bottom 0
            width 100%
            background-color rgba(0,0,0,.2)
          .title 
            text-align center
            font-weight 600
            line-height 1.5
      .removeAlbum
        position absolute
        top -6px 
        right -4px
        // color #e10601
        color #fff
        font-size 20px
    .addAlbum
      text-align center
      i
        line-height 60px 
        font-size 30px
        font-weight bold      
            




</style>
