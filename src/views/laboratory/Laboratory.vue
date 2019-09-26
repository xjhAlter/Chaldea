<template>
  <div class="laboratory">
    <!-- 勝利の法則は決まった！胜利的法则已经决定！-->
    <div class="laboratory-title">
      <span class="color-primary">さぁ、実験を始めようか</span>
      <span class="color-danger">撒，开始实验吧</span>
    </div>
    <div class="laboratory-content">
      <div class="lab-box">
        <MagicCube></MagicCube>
      </div>
      <div class="lab-box">
        <RotaryAlbum @onImgClick="onImgClick"></RotaryAlbum>
        <div class="current-img-wrapper" v-if="currentImg">
          <ImgModal :imgUrl="currentImg.imgUrl" :imgWidth="285" :imgHeight="403" :localMode="true"></ImgModal>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {MagicCube, RotaryAlbum, ImgModal} from '@/components'
export default {
  name: 'Laboratory',
  components: {
    MagicCube,
    RotaryAlbum,
    ImgModal
  },
  data () {
    return {
      currentImg: null
    }
  },
  mounted () {
  },
  methods: {
    onImgClick (item) {
      console.log(item)
      this.$set(this, 'currentImg', item)
    }
  }
}
</script>

<style lang="less" scoped>
  .laboratory {
    display: flex;
    position: relative;
    .laboratory-title {
      display: flex;
      flex-direction: column;
      position: absolute;
      top:10px;
      left: -50px;
      transform: rotate(-20deg);
      font-size: 20px;
      z-index: 1;
    }
    .laboratory-content {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 1200px;
      height: auto;
      background-color: rgba(253,242,218,.7);
      .lab-box {
        position: relative;
        min-height: 600px;
        border-bottom: 5px solid rgba(255, 255, 255, .5);
        .current-img-wrapper {
          position: absolute;
          top: 20px;
          left: 20px;
          border: 3px solid rgba(218, 165, 32, 0.5);
        }
      }
    }
  }
</style>
