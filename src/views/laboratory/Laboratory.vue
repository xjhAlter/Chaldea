<template>
  <div class="laboratory">
    <!-- 勝利の法則は決まった！胜利的法则已经决定！-->
    <div class="laboratory-title">
      <span class="color-primary">さぁ、実験を始めようか</span>
      <span class="color-danger">撒，开始实验吧</span>
    </div>
    <div class="laboratory-content">
      <MagicCube></MagicCube>
      <RotaryAlbum @onImgClick="onImgClick"></RotaryAlbum>
      <div class="current-img-wrapper">
        <ImgModal v-if="currentImg" :imgUrl="currentImg.imgUrl" :imgWidth="285" :imgHeight="403" :localMode="true"></ImgModal>
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
      position: relative;
      width: 1200px;
      height: 1000px;
      background-color: rgba(253,242,218,.7);
      .current-img-wrapper {
        position: absolute;
        top: 10px;
        left: 800px;
      }
    }
  }
</style>
