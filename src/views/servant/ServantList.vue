<template>
  <div class="servant-list-main">
    <h1>从者列表</h1>
<!--    <el-button @click="toServant()">测试</el-button>-->
<!--    <el-button @click="toServant()" type="primary">测试</el-button>-->
<!--    <el-button @click="toServant()" type="danger">测试</el-button>-->
<!--    <el-button @click="toServant()" type="warning">测试</el-button>-->
<!--    <el-button @click="toServant()" type="success">测试</el-button>-->
<!--    <el-button @click="toServant()" type="info">测试</el-button>-->

    <el-table :data="items" stripe border style="width: 100%" class="servant-table" :highlight-current-row="true">
      <el-table-column prop="id" label="No." width="120" :align="'center'"></el-table-column>
      <el-table-column label="头像" :align="'center'">
        <template slot-scope="scope">
          <ImgModal :imgUrl="scope.row.avatarUrl" :imgWidth="66" :imgHeight="72" :localMode="true"></ImgModal>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="120" :align="'center'">
        <template slot-scope="scope">
          <div class="highlight" @click="toServant(scope.row.id)">{{scope.row.name}}</div>
          <div>{{scope.row.jpName}}</div>
          <div>{{scope.row.enName}}</div>
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
      items: [{
        id: '206',
        avatarUrl: 'servant_avatar/Servant206.jpg',
        name: '阿喀琉斯',
        jpName: 'アキレウス',
        enName: 'Achilles',
        class: 'Rider',
        rarity: '5',
        np: 'Quick All',
        attr: '地',
        access: '圣晶石常驻',
        maxAtk: 11883,
        maxHp: 13219
      }, {
        id: '213',
        avatarUrl: 'servant_avatar/Servant213.jpg',
        name: '齐格鲁德',
        jpName: 'シグルド',
        enName: 'Sigurd',
        class: 'Saber',
        rarity: '5',
        np: 'Buster Single',
        attr: '地',
        access: '期间限定',
        maxAtk: 12465,
        maxHp: 13975
      }]
    }
  },
  methods: {
    toServant (id) {
      this.$router.push({
        name: 'Servant',
        params: {id: id}
      })
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
