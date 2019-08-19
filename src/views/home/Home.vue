<template>
  <div class="home">
    <!-- 排序不符合通常的逻辑，无需排序的场景可以考虑使用 -->
    <div class="random-box">
      <div v-for="n in Math.floor(Math.random() * 100 + 1)" :key="n" class="box color-primary" :style="{'width':'380px','height':getSize()}">{{n}}</div>
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
  created () {

  },
  methods: {

  },
  computed: {
    getSize () {
      return function () {
        return Math.floor(Math.random() * 400 + 100) + 'px'
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
      padding: 20px;
      -moz-column-count:3; /* Firefox */
      -webkit-column-count:3; /* Safari 和 Chrome */
      column-count:3;
      -moz-column-gap: 10px; /* Firefox */
      -webkit-column-gap: 10px; /* Safari 和 Chrome */
      column-gap: 10px;

      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        background-color: #eee;
        margin-bottom: 10px;
        break-inside: avoid;  //控制文本块分解成单独的列，以免列表的内容跨列
      }
    }
  }
</style>
