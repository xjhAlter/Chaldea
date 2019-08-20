<template>
  <div class="img-modal">
    <img :src="imgSrc" :width="imgWidth" :height="imgHeight" class="modal-img" :class="skin" @click="showImgModal" alt="">
    <div class="modal" v-show="showModal">
      <div class="modal-content">
        <img :src="imgSrc" alt="">
        <i class="el-icon-circle-close" @click="close"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgModal',
  props: {
    imgUrl: {
      required: true,
      type: String
    },
    localMode: {
      type: Boolean,
      default: false
    },
    skin: {
      require: false,
      type: String,
      default: ''
    },
    imgWidth: {
      required: false,
      type: Number,
      default: 200
    },
    imgHeight: {
      require: false,
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  created () {
  },
  methods: {
    showImgModal () {
      this.showModal = true
    },
    close () {
      this.showModal = false
    }
  },
  computed: {
    imgSrc () {
      if (this.localMode) {
        // 由于:src 不能解析本地图片，所以以这种方式引入本地图片，本地图片统一放在/assets/image/下
        return require(`../assets/image/${this.imgUrl}`)
      } else {
        return this.imgUrl
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .img-modal {
    .modal-img {
      cursor: pointer;
    }
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.6);
      z-index: 1000;
      .modal-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: #fff;
        .el-icon-circle-close {
          position: absolute;
          bottom: -60px;
          font-size: 36px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
</style>
