<template>
  <div class="header">
    <el-row class="header-row">
      <el-col @click.native="go('Home')" :class="{'color-primary':current === 'Home'}">首页</el-col>
      <el-col @click.native="go('ServantList')" :class="{'color-primary':current === 'ServantList'}">英灵</el-col>
      <el-col @click.native="go('ConceptCardList')" :class="{'color-primary':current === 'ConceptCardList'}">概念礼装</el-col>
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
  methods: {
    go (to) {
      if (to !== this.current) {
        this.current = to
        console.log(this.current)
        this.$router.push({
          name: to
        })
      }
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
        width: 100px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
  }
</style>
