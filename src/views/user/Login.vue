<template>
  <div class="login-main">
    <div class="content">
      <el-input placeholder="请输入登陆账号" prefix-icon="el-icon-user-solid" v-model="userInfo.account"></el-input>
      <el-input placeholder="请输入登陆密码" prefix-icon="el-icon-lock" v-model="userInfo.password"></el-input>
      <el-button @click.native="submit" type="success">登陆</el-button>
      <el-button @click.native="back">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userInfo: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      console.log('submit')
      this.$router.push({name: 'Home'})
    },
    back () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="less" scoped>

  .login-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff url("https://img.alicdn.com/imgextra/i3/2406822118/O1CN01F7o6mo1RW5Q20XOJu-2406822118.png") no-repeat;
    background-size:cover;
    z-index: 1001;

    .content {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 20%;
      right: 10%;
      width: 300px;
      height: 60%;
      margin: 20px;
      background-color: rgba(256,256,256,.8);
      box-shadow:0 0 100px 120px rgba(256,256,256,.8);

      .el-input, .el-button {
        margin-left: 0;
        margin-bottom: 20px;
      }
    }
  }

</style>
