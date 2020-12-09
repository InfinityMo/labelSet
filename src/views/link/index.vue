<template>
  <div class="page">
    <div class="title">
      联恩商品分类
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
                  <img :src="img"
                       @click="enlargeImg(img,item.image)">
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
              <div class="ell2 link"
                   @click="toTmall(item.url)">{{item.url}}</div>
              <div class="chose-tip">请选择该商品的分类<span>（可多选）</span></div>
              <el-checkbox-group v-model="item.cate"
                                 class="check-group">
                <el-checkbox-button v-for="cateItem in cates"
                                    :label="cateItem.value"
                                    :disabled="item.valid===1"
                                    :class="{'is-save':item.valid===1}"
                                    :key="cateItem.value">{{cateItem.name}}</el-checkbox-button>
              </el-checkbox-group>
              <div class="check">
                <ul>
                  <li v-for="(pos,index) in item.cate"
                      :key="index">{{selectData(pos)}}<span v-show="index!==item.cate.length-1">/</span></li>
                </ul>
                <el-button type="primary"
                           v-if="item.valid===1"
                           :disabled="item.cate.length<=0"
                           plain
                           @click="modifyItem(item.id)">修改</el-button>
                <el-button type="primary"
                           v-else
                           :disabled="item.cate.length<=0"
                           @click="confirmItem(item.id)">确定</el-button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <el-pagination class="pagination"
                     :key="randomKey"
                     background
                     @current-change="currentChange"
                     :current-page="pageChange.pageNum"
                     :page-size="pageChange.pageSize"
                     @next-click="nextClick"
                     layout="total, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>
    <el-image-viewer v-if="showViewer"
                     :url-list="picList"
                     :on-close="closeViewer">
    </el-image-viewer>
  </div>
</template>
<script>
import tableMixin from '@/mixins/dealTable'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { mapMutations, mapGetters } from 'vuex'
import ElImageViewer from 'element-ui/packages/image/src/image-viewer.vue'
export default {
  mixins: [tableMixin],
  components: {
    swiper,
    swiperSlide,
    ElImageViewer
  },
  data () {
    return {
      user: '', // 用户身份
      labelData: [],
      cates: [],
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
      total: 1,
      pageChange: {
        pageNum: 1,
        pageSize: 10
      },
      randomKey: '1',
      dialogVisible: false,
      showViewer: false,
      picList: []
    }
  },
  computed: {
    ...mapGetters([
      'getCacheData'
    ]),
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
  async created () {
    await this.getCate()
    // 获取用户身份
    if (this.$route.query) {
      if (this.$route.query.user) {
        this.user = this.$route.query.user
        // 获取最后一次操作的页数
        this.getLastPage().then(res => {
          if (res) {
            this.getLabelData()
          }
        })
      }
    }
  },
  mounted () {

  },
  methods: {
    ...mapMutations({ saveCacheData: 'saveCacheData' }),
    // 点击修改
    modifyItem (itemId) {
      const target = this.labelData.filter(i => i.id === itemId)[0]
      if (target) {
        target.valid = 0
      }
    },
    submitData (itemId) {
      const target = this.labelData.filter(i => i.id === itemId)[0].cate
      this.$request.post('/update', {
        user: this.user,
        id: itemId,
        cate: target.length > 0 ? target.join() : ''
      }).then(res => {
        this.$message.success('保存成功')
        this.getLabelData()
      })
    },
    // 点击确定
    confirmItem (itemId) {
      const surplusData = []
      this.labelData.map(item => {
        if (item.id !== itemId && item.valid === 0 && item.cate.length > 0) {
          surplusData.push(item)
        }
      })
      // 点击确定缓存当前以选择的且未保存的数据
      this.saveCacheData(surplusData)
      this.submitData(itemId)
    },
    getLabelData () {
      this.$request.post('/getItem', {
        ...this.pageChange,
        user: this.user
      }).then(res => {
        this.total = res.data.total
        const resultData = res.data.result || []
        if (this.getCacheData.length > 0) {
          this.getCacheData.map(cacheItem => {
            const target = resultData.filter(i => i.id === cacheItem.id)[0]
            if (target) {
              target.cate = cacheItem.cate
              target.valid = cacheItem.valid
            }
          })
        }
        this.labelData = resultData
      })
    },
    judgeComplete () {
      return new Promise((resolve, reject) => {
        const judgeFlag = this.labelData.every(item => item.valid === 1)
        resolve(judgeFlag)
      })
    },
    pageNumChange (pageNum) {
      if (pageNum > this.pageChange.pageNum) {
        this.judgeComplete().then(res => {
          if (res) {
            this.pageChange.pageNum = pageNum
            this.getLabelData()
          } else {
            this.$alert('本页有未分类完成的商品，将本页商品全部分类完成后，方可跳至下一页', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.randomKey = Math.random() * 100000000
              }
            })
          }
        })
      } else {
        this.pageChange.pageNum = pageNum
        this.getLabelData()
      }
    },
    currentChange (pageNum) {
      this.pageNumChange(pageNum)
    },
    nextClick (pageNum) {
      this.pageNumChange(pageNum)
    },
    toTmall (link) {
      window.open(link)
    },
    getLastPage () {
      return new Promise((resolve, reject) => {
        this.$request.post('/latest', {
          user: this.user,
          pageNum: 1,
          pageSize: 10
        }).then(res => {
          if (res.errorCode === 1) {
            resolve(true)
            this.pageChange.pageNum = res.data
          } else {
            resolve(false)
          }
          this.randomKey = Math.random() * 100000000
        })
      })
    },
    getCate () {
      this.$request.post('/getCate').then(res => {
        this.cates = res.data || []
      })
    },
    closeViewer () {
      this.showViewer = false
    },
    // 图片放大
    enlargeImg (imgUrl, imgList) {
      this.showViewer = true
      this.picList = imgList
    }
  }
}
</script>
<style lang="less" scoped>
@import "./index";
</style>
