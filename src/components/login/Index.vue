<template>
  <div id="login">
    <el-form class="loginForm">
      <el-form-item>
        <el-input placeholder="请输入用户名" v-model="username" prefix-icon="iconfont icon-user" class="user"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="password" prefix-icon="iconfont icon-password" class="password"></el-input>
      </el-form-item>
      <el-form-item class="btnForm">
        <el-button type="primary" @click="loginIn">登录</el-button>
        <p class="registered">还没有账户？赶快去<span>注册</span>吧</p>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
export default {
    data() {
        return {
            username: '',
            password: '',
            islogin: false,
            callback: []
        }
    },
    mounted: function(){
      this.$http.get("/users").then(res => {
        this.callback.push(res.data);
      })
      .catch(function (error) {
        alert(error);
      });
    },
    beforeCreate(){
      if(localStorage.getItem('islogin')){
        this.$router.push('./')
      }
    },
    methods:{
      ...mapMutations(['SET_islogin','GET_USER']),
      loginIn(){
        if(this.username == "" || this.password == ""){
          alert("用户名或密码不能为空")
        }else if(this.callback[0].code != 200){
          alert("数据请求失败")
        }else{
          if(this.username != this.callback[0].users[0].username){
            alert("不存在该用户")
          }else if(this.password != this.callback[0].users[0].password){
            alert("密码输入错误")
          }else {
            alert("登录成功");
            this.islogin = this.callback[0].islogin;
            // 改变store.js中的登录状态，并存储用户名
            store.commit('SET_islogin',this.islogin);
            store.commit('GET_USER',this.username);
            this.$router.push('./')
          }
        }
      }
    }
};
</script>
<style>
  body{
    margin: 0;
  }
  .el-input__prefix{
    left: 15px!important;
  }
  .el-input__inner{
    background-color: transparent!important;
    color: #fff!important;
    border: none !important;
    padding-left: 0;
  }
  .password input,.user input{
    position: absolute;
    left: 0;
    top: 0;
    border: none !important;
    padding-left: 45px!important;
    border-radius: 25px !important;
  }
</style>
<style lang="less" scoped> 
  @import "../../assets/base.less";
  #login{
    width: 100%;
    height: 100vh;
    background: url("../@{images}bg.jpg") no-repeat;
    background-size: cover;
  }
  button{
    display: block;
    width: 100%;
    margin: 0!important;
    border: 1px solid rgba(211, 147, 147, .5) !important;
    color: rgba(211, 147, 147, .5) !important;
    border-radius: 25px !important;
    letter-spacing: 1em;
    line-height: 40px;
    cursor: pointer;
    &:hover{
      border: 1px solid rgba(211, 147, 147, 1) !important;
      color: rgba(211, 147, 147, 1) !important;
    }
  }
  .registered{
    text-align: right;
    color: rgba(255,255,255,.5);
    box-sizing: border-box;
    padding-right: 15px;
    span{
      color: rgba(211, 147, 147, .5) !important;
      margin: 0 5px;
      display: inline-block;
      cursor: pointer;
      &:hover{
        color: rgba(211, 147, 147, 1) !important;
      }
    }
  }
  .password,.user{
    margin-top: 25px;
    background-color: transparent!important;
    border-radius: 25px !important;
    border: 1px solid rgba(211, 147, 147, 0.5) !important;
    padding-left: 40px !important;
    color: #fff!important;
    box-sizing: border-box;
    position: relative;
    height: 40px;
  }
  #login{
    margin: 0;
    .loginForm{
        width: 450px;
        padding: 30px;
        box-sizing: border-box;
        background-color: transparent;
        border-radius: 5px;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 250px;
        .btnForm{
            text-align: center;
            margin-top: 30px;
        }
    }
  }
</style>