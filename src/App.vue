<template>
  <div id="app">
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
      <div class="layout-right-tool">
        <RightTool></RightTool>
      </div>
    </div>
    <div class="layout-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {Header, Footer, RightTool} from '@/views/layout'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    RightTool
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
    position: relative;
    width: 1200px;
    min-height: calc(100vh - 140px);
    margin: 0 auto;
  }

  .layout-right-tool {
    position: absolute;
    right: -10px;
  }
}
</style>
