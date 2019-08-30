<template>
  <div>
    从者信息
    <h2>{{id || 'none'}}</h2>
<!--    <img :src="imgSrc" v-if="id=='196'" alt="">-->
    <ImgCarousel v-if="id=='196'" :imgList="imgList"></ImgCarousel>
    <Shuttle v-else></Shuttle>
  </div>
</template>

<script>
import {Shuttle, ImgCarousel} from '@/components'
export default {
  name: 'Servant',
  props: ['id'],
  components: {
    Shuttle,
    ImgCarousel
  },
  data () {
    return {
      sid: this.id || '无',
      imgList: [{
        imgUrl: 'servant_card/196/0.png',
        title: '初始'
      }, {
        imgUrl: 'servant_card/196/1.png',
        title: '灵基突破Ⅰ'
      }, {
        imgUrl: 'servant_card/196/2.png',
        title: '灵基突破III'
      }, {
        imgUrl: 'servant_card/196/3.png',
        title: '灵基突破Ⅳ'
      }]
    }
  },
  computed: {
    imgSrc () {
      if (this.id == '196') {
        return require(`@/assets/image/servant_card/${this.id}/0.png`)
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
