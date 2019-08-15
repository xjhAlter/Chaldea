<template>
  <div class="right-tool">
    <ul class="right-tool-ul">
      <li>啊哈</li>
      <li>哈哈</li>
      <li v-show="showTop" @click="toTop">top</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RightTool',
  data () {
    return {
      scrollTop: 0,
      time: 0,
      decrement: 20,
      scrollState: 0
    }
  },
  methods: {
    toTop (e) {
      if (this.scrollState) {
        return
      }
      this.scrollState = 1
      e.preventDefault()
      let _this = this
      this.time = setInterval(function () {
        _this.gotoTop(_this.scrollTop - _this.decrement)
      }, 10)
    },
    gotoTop (distance) {
      this.decrement += 20
      distance = distance > 0 ? distance : 0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance
      if (this.scrollTop < 10) {
        clearInterval(this.time)
        this.decrement = 20
        this.scrollState = 0
      }
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  created () {

  },
  mounted () {
    window.addEventListener('scroll', this.getScrollTop)

    // let _this = this;
    // window.onscroll = function () {
    //   let t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
    //   if (t > 200) {
    //     if (!_this.showTop) {
    //       _this.$set(_this, 'showTop', true);
    //     }
    //   } else {
    //     if (_this.showTop) {
    //       _this.$set(_this, 'showTop', false);
    //     }
    //   }
    // }
  },
  computed: {
    showTop: function () {
      return this.scrollTop > 200
    }
  }
}
</script>

<style lang="less" scoped>
  .right-tool {
    ul, li {
      list-style-type: none;
    }
    li {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-weight: bold;
      color: #409eff;
      background-color: #e8e8e8;
      border-radius: 25px;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #409eff;
      }
      &:last-child {
        margin-top: 200px;
      }
    }
    position: fixed;
    top: 50%;
    right: auto;
    margin-top: -150px;
    z-index: 999;
  }
</style>
