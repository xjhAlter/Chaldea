<template>
  <div class="header">
    <el-row class="header-row">
      <el-col>首页</el-col>
      <el-col>英灵</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
        &:hover {
          color: #409eff;
        }
      }
    }
  }
</style>
