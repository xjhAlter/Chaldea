<template>
  <div class="login-main" :style="mainStyle">
    <div class="content">
      <el-input placeholder="请输入登陆账号" prefix-icon="el-icon-user-solid" v-model.trim="userInfo.username"></el-input>
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
        username: '',
        password: ''
      }
    }
  },
  created () {
    // $on,$emit用于组件之间通信，这里只做参考
    this.$on('userLogin', function (username) {
      console.log('Login:' + username)
    })
  },
  methods: {
    submit () {
      console.log('submit')
      if (this.userInfo.username) {
        this.$router.back()
        this.$emit('userLogin', this.userInfo.username)
      }
    },
    back () {
      console.log('back')
      this.$router.back()
    }
  },
  computed: {
    mainStyle () {
      return {
        backgroundImage: `url(${require('@/assets/image/common/login_bg.jpg')})`
      }
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
    background-color: #fff;
    background-repeat: no-repeat;
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
