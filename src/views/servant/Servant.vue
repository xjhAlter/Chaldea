<template>
  <div>
    从者信息
    <h2>{{id || 'none'}}</h2>
    <img :src="imgSrc" v-if="id==='196'" alt="">
  </div>
</template>

<script>
export default {
  name: 'Servant',
  props: ['id'],
  data () {
    return {
      sid: this.id || '无'
    }
  },
  computed: {
    imgSrc () {
      if (this.id === '196') {
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
