<template>
  <div>
    从者信息
    <h2>{{id || 'none'}}</h2>
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
  }
}
</script>

<style lang="less" scoped>

</style>
