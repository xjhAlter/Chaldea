<template>
  <div id="app">
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="layout-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .layout-content {
    min-height: calc(100vh - 140px);
  }
}
</style>
