<template>
  <div class="home">
    这里是首页啦
    <div class="random-box">
      <div v-for="n in Math.floor(Math.random()*100)" :key="n" class="box color-default" :style="{'width':getSize(),'height':getSize()}">{{n}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    getSize () {
      return function () {
        return Math.floor(Math.random() * 400 + 20) + 'px'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    width: 100%;
    height: auto;
    background-color: #fff;
    .random-box {
      display: flex;
      flex-wrap: wrap;
      /*column-count: 3;*/
      /*column-gap: 0;*/
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        background-color: #e8e8e8;
        margin: 5px;
        /*break-inside: avoid;*/
      }
    }
  }
</style>
