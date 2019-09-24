<template>
  <div class="laboratory">
    <!-- 勝利の法則は決まった！胜利的法则已经决定！-->
    <div class="laboratory-title">
      <span class="color-primary">さぁ、実験を始めようか</span>
      <span class="color-danger">撒，开始实验吧</span>
    </div>
    <div class="laboratory-content">
      <MagicCube></MagicCube>

    </div>

  </div>
</template>

<script>
import {MagicCube} from '@/components'
export default {
  name: 'Laboratory',
  components: {
    MagicCube
  },
  mounted () {
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
    }
    .laboratory-content {
      width: 1200px;
      height: 1000px;
      background-color: rgba(253,242,218,.7);
    }
  }
</style>
