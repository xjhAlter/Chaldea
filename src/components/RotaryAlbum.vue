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
import {getLocalImg} from '../assets/js/common'
export default {
  name: 'RotaryAlbum',
  data () {
    return {
      // 测试用数据，有时间再改一下
      imgList: [{
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
      }
      ]
    }
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
        let offset = index * (360 / this.imgList.length)
        return {
          'transform': `rotateY(${offset}deg) translateZ(250px)`
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
    height: 100px;
    .stage-area {
      perspective: 800px;
      -webkit-perspective: 800px;
      /*perspective-origin: center 30%;*/
      /*-webkit-perspective-origin: center 30%;*/
      transform-style: preserve-3d;
      transform: rotateX(-10deg);
      min-height: 100%;
      .container {
        transform-style: preserve-3d;
        transform-origin:100% 100%;
        width: 160px;
        position: absolute;
        top: 50%;
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
