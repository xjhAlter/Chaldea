<template>
  <div class="rotary-album">
    <div class="stage-area">
      <div class="container">
        <img :src="imgSrc(item.imgUrl)" alt="" v-for="(item,index) in imgList" :key="index" :style="getStyle(index)" @click="imgClick(item)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {random, getLocalImg} from '../assets/js/common'
export default {
  name: 'RotaryAlbum',
  data () {
    return {
      imgList: []
    }
  },
  created () {
    // 测试用
    let testList = [{
      imgUrl: 'servant_card/196/0.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/1.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/2.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/3.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/4.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/0.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/1.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/2.png',
      title: ''
    }, {
      imgUrl: 'servant_card/196/3.png',
      title: ''
    }]
    testList = testList.slice(0, Math.floor(random() * 6) + 4)
    this.$set(this, 'imgList', testList)
  },
  methods: {
    imgClick (item) {
      this.$emit('onImgClick', item)
    }
  },
  computed: {
    imgSrc () {
      return function (imgUrl) {
        return getLocalImg(imgUrl)
      }
    },
    getStyle () {
      return function (index) {
        let offsetY = index * (360 / this.imgList.length)
        let offsetZ = this.imgList.length > 5 ? 250 : 160
        return {
          'transform': `rotateY(${offsetY}deg) translateZ(${offsetZ}px)`
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @keyframes rotatingY {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  .rotary-album {
    position: relative;
    height: 200px;
    .stage-area {
      position: relative;
      perspective: 800px;
      -webkit-perspective: 800px;
      perspective-origin: center 30%;
      -webkit-perspective-origin: center 30%;
      min-height: 100%;
      .container {
        transform-style: preserve-3d;
        transform-origin:100% 100%;
        width: 160px;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-top: -80px;
        margin-left: -80px;
        animation: rotatingY linear 20s infinite;
        img {
          max-width: 100%;
          position: absolute;
          border: 3px solid rgba(255, 255, 255, .5);
          cursor: pointer;
        }
        &:hover {
          /*animation-play-state: paused;*/
        }
        &>img:not(:target) {
          z-index: -1;
        }
      }
    }
  }
</style>
