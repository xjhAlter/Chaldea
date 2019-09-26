<template>
  <div style="display: flex">
    <div class="sphere-stage" :style="getStageStyle">
      <div class="sphere-particle" v-for="n in radius * 2" :key="n" :style="getStyle(n)"></div>
    </div>
  </div>
</template>

<script>
import {PI, cos, sin} from '../assets/js/common.js'
export default {
  name: 'Sphere',
  props: {
    radius: {
      require: true,
      type: Number,
      default: 200
    }
  },
  data () {
    return {

    }
  },
  computed: {
    getStageStyle () {
      return {
        'width': `${this.radius * 2}px`,
        'height': `${this.radius * 2}px`
      }
    },
    getStyle () {
      return function (index) {
        let theta = (index / this.radius) * 120
        let delta = (index / this.radius) * PI
        let x = cos(delta) * cos(theta) * this.radius + this.radius
        let y = cos(delta) * sin(theta) * this.radius + this.radius
        let z = sin(delta) * this.radius
        return {
          'transform': `translate3d(${x}px, ${y}px,${z}px)`
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @keyframes rotation{
    to{
      transform:rotateY(360deg);
    }
  }
  .sphere-stage {
    position: relative;
    transform-style: preserve-3d;
    animation: rotation 10s linear infinite;
    .sphere-particle {
      width: 4px;
      height: 4px;
      background:#409eff;
      position: absolute;
      top: -2px;
      left: -2px;
      transform-style: preserve-3d;
      &:before{
        content:"";
        display: block;
        width: 4px;
        height:4px;
        background:#409eff;
        animation: rotation 10s infinite linear reverse;
      }
    }
  }
</style>
