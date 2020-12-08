<template>
  <div class="page">
    <div class="title">
      套装分类
    </div>
    <div class="content-wrap">
      <ul class="flex content-box">
        <li v-for="(item,index) in labelData"
            :key="index"
            class="label-item">
          <h6 class="ell2">{{item.title}}</h6>
          <div class="flex">
            <!-- 左侧图片 -->
            <div class="swiper-wrap">
              <swiper :options="swiperOption">
                <swiper-slide class="item"
                              v-for="(img,index) in item.image"
                              :key="index">
                  <img :src="img">
                </swiper-slide>
                <div class="swiper-pagination"
                     slot="pagination">
                </div>
                <div class="swiper-button-prev"
                     slot="button-prev">
                  <div><img src="@/assets/img/icons/prev.png"></div>
                </div>
                <div class="swiper-button-next"
                     slot="button-next">
                  <div><img src="@/assets/img/icons/next.png"></div>
                </div>
              </swiper>
            </div>
            <!-- 右侧内容 -->
            <div class="right-content">
              <div class="link-tip">商品链接：</div>
              <div class="ell2 link">{{item.url}}</div>
              <div class="chose-tip">请选择该商品的分类<span>（可多选）</span></div>
              <el-checkbox-group v-model="item.cate"
                                 class="check-group">
                <el-checkbox-button v-for="cateItem in cates"
                                    :label="cateItem.value"
                                    :disabled="item.valid==='1'"
                                    :class="{'is-save':item.valid==='1'}"
                                    :key="cateItem.value">{{cateItem.name}}</el-checkbox-button>
              </el-checkbox-group>
              <div class="check">
                <ul>
                  <li v-for="(pos,index) in item.cate"
                      :key="index">{{selectData(pos)}}<span v-show="index!==item.cate.length-1">/</span></li>
                </ul>
                <el-button type="primary"
                           v-if="item.valid==='1'"
                           :disabled="item.cate.length<=0"
                           plain
                           @click="modifyItem(item.id)">修改</el-button>
                <el-button type="primary"
                           v-else
                           :disabled="item.cate.length<=0"
                           @click="submit(item.id)">确定</el-button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <el-pagination class="pagination"
                     background
                     @size-change="sizeChange"
                     @current-change="currentChange"
                     :current-page="pageChange.pageNum"
                     :page-size="pageChange.pageSize"
                     @next-click="nextClick"
                     layout="total, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>

  </div>
</template>
<script>
import tableMixin from '@/mixins/dealTable'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { mock, cates } from './data'
import { mapMutations } from 'vuex'
export default {
  mixins: [tableMixin],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      labelData: mock,
      cates: cates,
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
  computed: {
    // 将分标签id转化为文字数组
    selectData (cateString) {
      return function (cateString) {
        const filterData = this.cates.filter(i => {
          return i.value === cateString
        })
        return filterData[0].name
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    ...mapMutations({ saveCacheData: 'saveCacheData' }),
    // 点击修改
    modifyItem (itemId) {
      const target = this.labelData.filter(i => i.id === itemId)[0]
      if (target) {
        target.valid = '0'
      }
    },
    // 点击确定
    submit (itemId) {
      console.log(this.labelData.filter(i => i.id === itemId)[0].cate)
      const surplusData = []
      this.labelData.map(item => {
        if (item.id !== itemId) {
          surplusData.push(item)
        }
      })
      debugger
      this.saveCacheData(surplusData)
    },
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
