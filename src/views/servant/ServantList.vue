<template>
  <div>
    <h1>从者列表</h1>
    <el-button @click="toServant()">测试</el-button>
    <el-button @click="toServant()" type="primary">测试</el-button>
    <el-button @click="toServant()" type="danger">测试</el-button>
    <el-button @click="toServant()" type="warning">测试</el-button>
    <el-button @click="toServant()" type="success">测试</el-button>
    <el-button @click="toServant()" type="info">测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'ServantList',
  data () {
    return {

    }
  },
  methods: {
    toServant () {
      this.$router.push({
        name: 'Servant',
        params: {id: Math.floor((Math.random() * 300))}
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
