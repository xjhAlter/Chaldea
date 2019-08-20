<template>
  <div class="concept-card-list-wrapper">
    <h1>概念礼装列表</h1>
    <el-table :data="cards" stripe border style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <div class="highlight" @click="toCard(scope.row)">{{scope.row.name}}</div>
        </template>
      </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
<!--          <div class="img-wrapper">-->
<!--            <img :src="scope.row.previewUrl" alt="测试图片">-->
<!--          </div>-->
          <ImgModal :imgUrl="scope.row.previewUrl" :imgWidth="150" :imgHeight="150"></ImgModal>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {ImgModal} from '@/components'
export default {
  name: 'ConceptCardList',
  components: {
    ImgModal
  },
  data () {
    return {
      cards: [{
        id: 1,
        name: '红',
        previewUrl: 'https://cdn.cxb123.com/imgextra1/t!72199/activity/watermark/user/ZHMx486117.png_260x260.jpg'
      }, {
        id: 2,
        name: '橙',
        previewUrl: 'https://cdn.cxb123.com/imgextra1/t!26008/activity/watermark/user/ZHMx478536.png_260x260.jpg'
      }, {
        id: 3,
        name: '黄',
        previewUrl: 'https://cdn.cxb123.com/imgextra1/t!18851/activity/watermark/user/ZHMx462218.png_260x260.jpg'
      }, {
        id: 4,
        name: '绿',
        previewUrl: 'https://cdn.cxb123.com/imgextra1/t!14147/activity/watermark/user/ZHMx423209.png_260x260.jpg'
      }, {
        id: 5,
        name: '青',
        previewUrl: 'https://cdn.cxb123.com/imgextra1/t!91893/activity/watermark/user/ZHMx466065.png_260x260.jpg'
      }, {
        id: 6,
        name: '蓝',
        previewUrl: 'https://cdn.cxb123.com/imgextra1/t!35241/activity/watermark/user/ZHMx484930.png_260x260.jpg'
      }, {
        id: 7,
        name: '紫',
        previewUrl: 'https://cdn.cxb123.com/imgextra1/t!74161/activity/watermark/user/ZHMx474670.png_260x260.jpg'
      }]
    }
  },
  methods: {
    toCard (item) {
      // 如果用path代替name，则不能带params,例: path:`/concept-card/${item.id}`
      this.$router.push({
        name: 'ConceptCard',
        params: {id: item.id},
        query: {imgUrl: item.previewUrl}
      })
    }
  }
}
</script>

<style lang="less" scoped>

  .concept-card-list-wrapper {
    .img-wrapper {
      width: 200px;
      height: 200px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

</style>
