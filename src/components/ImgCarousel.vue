<template>
  <div class="img-carousel">
    <ul class="img-list">
      <li v-for="(item,index) in imgList" :key="index">
        <img :src="imgSrc(item.imgUrl)" alt="" class="carousel-img">
      </li>
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

    }
  },
  methods: {

  },
  computed: {
    imgSrc () {
      return function (imgUrl) {
        return getLocalImg(imgUrl)
      }
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
    width: 285px;
    height: 403px;
    overflow: hidden;
    .img-list {
      display: flex;
      overflow: hidden;
      li {
        animation: imgMove 5s linear infinite;
        /*&:hover {*/
        /*  animation: fadeOut 1s linear forwards;*/
        /*  img {*/
        /*    animation: moveLeft 1s linear forwards;*/
        /*  }*/
        /*}*/
      }
    }
  }
</style>
