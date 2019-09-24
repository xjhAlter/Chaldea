<template>
  <div class="img-carousel">
    <ul class="img-list">
      <li v-for="(item,index) in showingImgList" :key="index" :class="['img-wrapper',{'is-current':index===1}]" @click="showImg(item._index)">
        <img :src="imgSrc(item.imgUrl)" alt="" class="carousel-img">
        <div class="img-mask"></div>
      </li>
    </ul>
    <span class="img-title">{{itemTitle}}</span>
    <ul class="btn-list">
      <li v-for="(item,index) in imgList" :key="index" :class="['carousel-btn',{'is-current':index===currentIndex}]" @click="showImg(index)"></li>
    </ul>
  </div>
</template>

<script>
import {getLocalImg} from '../assets/js/common'

export default {
  name: 'ImgCarousel',
  props: {
    imgList: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      currentIndex: null,
      showingImgList: [],
      counter: null,
      timeoutCounter: null
    }
  },
  mounted () {
    this.currentIndex = 0
    this.imgList.forEach(function (item, index) {
      item._index = index
    })
    this.startInterval()
  },
  methods: {
    showImg (index) {
      clearInterval(this.counter)
      clearTimeout(this.timeoutCounter)
      this.currentIndex = index
      let _this = this
      this.timeoutCounter = setTimeout(function () {
        _this.startInterval()
      }, 10000)
    },
    startInterval () {
      let _this = this
      let maxIndex = this.imgList.length
      this.counter = setInterval(function () {
        let prev = document.getElementsByClassName('img-wrapper')[0]
        let current = document.getElementsByClassName('img-wrapper')[1]
        let next = document.getElementsByClassName('img-wrapper')[2]
        prev.style.left = '385px'
        current.style.width = '200px'
        current.style.left = '-100px'
        next.style.width = '285px'
        next.style.left = '-235px'
        next.style.zIndex = '1'
        setTimeout(function () {
          prev.style.left = '50px'
          current.style.width = '285px'
          current.style.left = '0'
          next.style.width = '200px'
          next.style.left = '-50px'
          next.style.zIndex = '0'
          _this.currentIndex = ++_this.currentIndex >= maxIndex ? 0 : _this.currentIndex
        }, 500)
      }, 3000)
    }
  },
  computed: {
    imgSrc () {
      return function (imgUrl) {
        return getLocalImg(imgUrl)
      }
    },
    itemTitle () {
      return this.imgList[this.currentIndex].title
    }
  },
  watch: {
    'currentIndex': function (newVal, oldVal) {
      let imgList = this.imgList
      let index = newVal - 1
      this.showingImgList = []
      this.showingImgList.push(imgList[index >= 0 ? index : imgList.length - 1])
      this.showingImgList.push(imgList[++index])
      this.showingImgList.push(imgList[++index >= imgList.length ? 0 : index])
      // console.log(this.showingImgList)
    }
  }
}
</script>

<style lang="less" scoped>

  @keyframes imgMove {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-855px);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes moveLeft {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-240px);
    }
  }

  .img-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img-list {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 430px;
      cursor: pointer;
      .img-wrapper {
        position: relative;
        width: 200px;
        font-size: 0; // 去掉li之间的空白字符
        transition: all .5s ease;
        img {
          width: auto;
          max-width: 100%;
        }
        .img-mask {
          display: none;
        }
        &:first-child,&:last-child {
          left: 50px;
          .img-mask {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
          }
        }
        &:last-child {
          left: -50px;
        }
        &.is-current {
          width: 285px;
          z-index: 1;
        }
      }
    }

    .btn-list {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -30px;
      width: 585px;
      height: 30px;
      .carousel-btn {
        width: 14px;
        height: 14px;
        background-color: #b9deff;
        border-radius: 7px;
        margin: 0 5px;
        cursor: pointer;

        &:hover,&.is-current {
          background-color: #409eff;
        }
      }
    }
  }
</style>
