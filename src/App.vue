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
    <div class="layout-right-tool">
      <RightTool></RightTool>
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
    min-height: calc(100vh - 140px);
    margin: 0 200px;
  }

  .layout-right-tool {
    position: absolute;
    right: 200px;
  }
}
</style>
