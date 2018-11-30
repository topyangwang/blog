<template>
  <div class="addPhotos bgImg">
    <manHead></manHead>
    <keep-alive>
    <bgBox class="bgBox">
      <ctitle>上传照片</ctitle>
      <div class="selectAlbum">
        <span>选择相册：</span>
        <el-select v-model="selectedAlbum" placeholder="请选择相册">
          <el-option
            v-for="item in albums"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>

      <el-upload
        action="/admin/addPhotos"
        ref="upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-change="handleChange"
        :auto-upload="false" 
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        multiple>
        <i class="el-icon-plus"></i>
      </el-upload>
      <!-- 放大图片 -->
      <el-dialog :visible.sync="dialogVisible">  
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <p v-show="rejectList.length>0">{{rejectList.join('; ')}}文件大于5兆</p>
      <div class="publish">
        <button class="blueBtn btn1" @click="upload()">上传</button>
        <!-- <button class="blueBtn btn2" @click="clear()">清空</button> -->
      </div>
    </bgBox>
    </keep-alive>
  </div>
</template>

<script>
import manHead from '@/views/manage/components/head'
import ctitle from '@/components/ctitle'
import bgBox from '@/components/bgBox'

export default {
  name: 'life',
  components:{manHead,bgBox,ctitle},
  props:['top'],
  data(){
    return{
      dialogVisible:false,
      dialogImageUrl: '',
      fileList:'',
      rejectList:[],
      albums:[],
      selectedAlbum:''
    }
  },
  mounted(){
    this.$http.get('/api/albums')
    .then(response=>{
      let res = response.data;
      this.albums = res.result;
      this.selectedAlbum = this.$route.query.album || this.albums[0];
    })
  },
  methods:{
    handleRemove(file, fileList) {
      // console.log(fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChange (file, fileList) {
      const isLt2M = (file.size / 1024 / 1024 < 5);
      if(!isLt2M){
        this.rejectList.push(file.name)
        fileList.pop()
      }
      this.fileList = fileList;
      return isLt2M
    },
    handleSuccess(response, file, fileList){
      fileList.length = 0;
    },
    beforeUpload (file) {
       let fd = new FormData()
       fd.append('file', file)  //必须有否则submit提交的文件问空
       fd.append('album', this.selectedAlbum)
          
      this.$http.post('/admin/addPhotos',fd)
        .then(()=>{ }) 
      return false // false就是不自动上传，我后来试了发现都一样，都不会自动上传
    },
    upload(){
      if(this.fileList.length>0){
        this.$refs.upload.submit();
      }
    },
  }
}
</script>

<style lang='stylus' scoped>
.addPhotos
  .selectAlbum
    margin 10px 0
  .publish
    text-align center
    margin-top 20px
    .btn1 
      width 60%
      line-height 30px
      border-radius 4px
      font-size 18px
    .btn2 
      width 60px
      font-size 14px
      line-height 20px
      margin-left 10px
      background-color #fff
      border-radius 4px
      color #333
  .el-dialog
    width 90%
  >>>.el-upload--picture-card
    width 100px
    height 100px
    line-height 100px
    margin-left 1%
  >>>.el-upload-list--picture-card .el-upload-list__item
    width 31%
    height auto
    margin 0 1% 1%
  >>>.el-upload-list--picture-card .el-upload-list__item-thumbnail
    vertical-align top
</style>
