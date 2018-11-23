<template>
  <div class="login bgImg">
    <topHead></topHead>
    <bgBox class="bgBox">
      <ctitle>登录</ctitle>
      <form class="loginBox">
        <input type="text" class="user" placeholder="请输入用户名" v-model="loginMsg.user">
        <input type="password" class="user" placeholder="请输入密码" v-model="loginMsg.pwd">
        <button class="loginBtn" @click="loginActive()">登录</button>
      </form>
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
      loginMsg:{
        user:'',
        pwd:''
      }
    }
  },
  mounted(){
  },
  methods:{
    loginActive(){
      if(!this.loginMsg.user){
        alert("请填写用户名")
        return
      }
      if(!this.loginMsg.pwd){
        alert("请填写密码")
        return
      }
      this.$http.post('/api/login',{
        userName:this.loginMsg.user,
        userPwd:this.loginMsg.pwd
      }).then((response)=>{
        let res = response.data;
        if(res.status == 1){
          localStorage.setItem('userId',res.result.userId)
          this.$router.push('/admin')
        }else{
          alert("用户名或密码错误！")
        }
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.login 
  .loginBox
    display flex
    flex-direction column
    align-items center
    input,.loginBtn
      background rgba(255,255,255,.3)
      border 1px solid #075498
      box-shadow 1px 1px 1px #075498
      line-height 26px
      margin 10px 0
      border-radius 4px
      width 80%
    .loginBtn
      color #075498
    
</style>
