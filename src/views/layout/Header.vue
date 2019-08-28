<template>
  <div class="header">
    <el-row class="header-row">
      <el-col :span="3" @click.native="go('Home')" :class="{'color-primary':isCurrent('Home')}">首页</el-col>
      <el-col :span="3" @click.native="go('ServantList')" :class="{'color-primary':isCurrent('Servant')}">英灵</el-col>
      <el-col :span="3" @click.native="go('ConceptCardList')" :class="{'color-primary':isCurrent('ConceptCard')}">概念礼装</el-col>
      <el-col :span="3" @click.native="go('CommandCardList')" :class="{'color-primary':isCurrent('CommandCard')}">指令纹章</el-col>
      <el-col :span="3" @click.native="go('UserLogin')" :class="{'color-primary':isCurrent('User')}" :offset="16">登陆</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      current: 'Home'
    }
  },
  created () {
    this.current = this.$router.history.current.name

    // let reg = /^(Home|Servant|ConceptCard)/
    // console.log(reg.exec(current)[0])
  },
  methods: {
    go (to) {
      let current = this.$router.history.current.name
      if (to !== current) {
        console.log(`From ${current} to ${to}`)
        this.current = to
        this.$router.push({
          name: to
        })
      }
    }
  },
  computed: {
    isCurrent () {
      // computed中不能传参，可以返回一个带参数的方法
      return function (tab) {
        return this.current ? this.current.indexOf(tab) > -1 : false
      }
    }
  },
  watch: {
    '$route': {
      handler (route) {
        this.current = route.name
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    width: 100%;
    background-color: #2c3e50;
    .header-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 60px;
      color: #fff;
      padding: 0 50px;
      .el-col {
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
  }
</style>
