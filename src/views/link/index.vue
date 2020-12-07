<template>
  <div class="page">
    <div class="title">
      套装分类小工具
    </div>
    <div class="content-wrap">
      <ul>
        <li>
          <h6>悦诗风吟护肤洁面套装新春限定礼盒装，拍一发10，送小样悦诗风吟护肤洁面套装新春限定礼盒装，拍一发10，送小样</h6>
          <div class="swiper-wrap">
            <swiper :options="swiperOption">
              <swiper-slide class="item">0</swiper-slide>
              <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
              <swiper-slide>Slide 5</swiper-slide>
              <div class="swiper-pagination"
                   slot="pagination"></div>
              <div class="swiper-button-prev"
                   slot="button-prev"></div>
              <div class="swiper-button-next"
                   slot="button-next"></div>
            </swiper>
          </div>
        </li>
      </ul>
    </div>
    <!-- <el-pagination class="pagination"
                   background
                   @size-change="sizeChange"
                   @current-change="currentChange"
                   :current-page="pageChange.pageNum"
                   :page-size="pageChange.pageSize"
                   @next-click="nextClick"
                   layout="total, prev, pager, next, jumper"
                   :total="total">
    </el-pagination> -->
  </div>
</template>
<script>
import tableMixin from '@/mixins/dealTable'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  mixins: [tableMixin],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      total: 100,
      pageChange: {
        pageNum: 1,
        pageSize: 10
      }
    }
  },

  created () {

  },
  mounted () {

  },
  methods: {
    sizeChange (pageSize) {
      this.pageChange.pageSize = pageSize
      // 页数大小发生变化时，手动将当前页设置为1
      this.pageChange.pageNum = 1
    },
    currentChange (pageNum) {
      this.pageChange.pageNum = pageNum
    },
    nextClick (pageNum) {

    }
  }
}
</script>
<style lang="less" scoped>
@import "./index";
</style>
