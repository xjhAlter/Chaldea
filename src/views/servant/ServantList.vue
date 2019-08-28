<template>
  <div class="servant-list-main">
    <h1>Servant List</h1>
    <el-table :data="items" stripe border style="width: 100%" class="servant-table" :highlight-current-row="true">
      <el-table-column prop="id" label="No." width="120" :align="'center'"></el-table-column>
      <el-table-column label="头像" :align="'center'">
        <template slot-scope="scope">
          <ImgModal :imgUrl="scope.row.avatarUrl" :imgWidth="66" :imgHeight="72" :localMode="true"></ImgModal>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180" :align="'center'">
        <template slot-scope="scope">
          <div class="highlight" @click="toServant(scope.row.id)">{{scope.row.name}}</div>
          <div>{{scope.row.jpName || '无'}}</div>
          <div>{{scope.row.enName || '无'}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="np" label="宝具" width="120" :align="'center'"></el-table-column>
      <el-table-column prop="class" label="职阶" width="120" :align="'center'"></el-table-column>
      <el-table-column prop="attr" label="属性" width="120" :align="'center'"></el-table-column>
      <el-table-column prop="access" label="获取途径" width="120" :align="'center'"></el-table-column>
      <el-table-column prop="maxAtk" label="满级ATK" width="120" :align="'center'"></el-table-column>
      <el-table-column prop="maxHp" label="满级HP" width="120" :align="'center'"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {ImgModal} from '@/components'
export default {
  name: 'ServantList',
  components: {
    ImgModal
  },
  data () {
    return {
      items: []
      // 数据格式
      // items: [{
      //   id: '196',
      //   avatarUrl: 'servant_avatar/Servant196.jpg',
      //   name: '埃列什基伽勒',
      //   jpName: 'エレシュキガル',
      //   enName: 'Ereshkigal',
      //   class: 'Lancer',
      //   rarity: '5',
      //   np: 'Buster All',
      //   attr: '地',
      //   access: '期间限定',
      //   maxAtk: 10343,
      //   maxHp: 16065
      // }, {
      //   id: '215',
      //   avatarUrl: 'servant_avatar/Servant215.jpg',
      //   name: '斯卡哈・丝卡蒂',
      //   jpName: 'スカサハ＝スカディ',
      //   enName: 'Scáthach⇋Skaði',
      //   class: 'Caster',
      //   rarity: '5',
      //   np: 'Art Assist',
      //   attr: '天',
      //   access: '期间限定',
      //   maxAtk: 10753,
      //   maxHp: 14406
      // }, {
      //   id: '230',
      //   avatarUrl: 'servant_avatar/Servant230.jpg',
      //   name: '虞美人',
      //   jpName: '虞美人',
      //   enName: 'Consort Yu',
      //   class: 'Assassin',
      //   rarity: '4',
      //   np: 'Buster All',
      //   attr: '地',
      //   access: '剧情限定',
      //   maxAtk: 7970,
      //   maxHp: 13389
      // }]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.items = this.$database.getTable('servantList')
    },
    toServant (id) {
      this.$router.push({
        name: 'Servant',
        params: {id: id}
      })
    }
  },
  watch: {
    '$route': {
      handler (to, from) {
        if (from.name !== 'ServantList') {
          this.getList()
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
    .servant-list-main {
      .servant-table {

      }
    }
</style>
