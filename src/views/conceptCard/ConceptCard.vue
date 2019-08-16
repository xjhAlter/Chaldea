<template>
  <div class="concept-card-main">
    概念礼装
    <div class="wrap">
      <ImgModal :imgUrl="imgUrl" :imgWidth="100" :imgHeight="100" :skin="'img-skin'"></ImgModal>
    </div>
  </div>
</template>

<script>
import {ImgModal} from '@/components'
export default {
  name: 'ConceptCard',
  components: {
    ImgModal
  },
  data () {
    return {
      imgUrl: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      console.log('concept card init')
      if (this.$route.query.imgUrl) {
        this.$set(this, 'imgUrl', this.$route.query.imgUrl)
      }
    }
  },
  watch: {
    '$route': {
      handler (route) {
        if (route.name === 'ConceptCard') {
          this.init()
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .concept-card-main {
    .wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 500px;
      background-color: #e8e8e8;
      margin: 20px auto;
    }
  }
</style>
<style lang="less">
  .img-skin {
    border: 3px dashed #409eff;
  }
</style>
