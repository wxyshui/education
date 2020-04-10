<!--
 * @Author: lixiaodi
 * @Date: 2020-03-19 17:31:33
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-20 17:04:05
 -->
<template>
  <div class="detail-box">
    <!-- 标题 -->
    <div class="detail-title">
        <div class="title-left">课件预览</div>
    </div>
    <!-- 内容 -->
    <div class="preview-content">
        <el-row :gutter="20">
            <!-- 左侧课件预览 -->
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <!-- 轮播展示文章 -->
                    <div class="swiper-box">
                        <swiper :options="swiperOption">    
                            <swiper-slide v-for="(page, index) of pages" :key="index" class="flex-box">
                                <!--循环显示的内容-->
                                <div class="recom-box" v-for="item of page" :key="item.id">
                                    <div class="file-img">
                                        <img :src="item.coursewareImg" alt="">
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- 箭头 -->
                        <div class="swiper-button-prev swiper-button-prev1"></div>
                        <div class="swiper-button-next swiper-button-next1"></div>
                    </div>
                    <!-- 课件页展示 -->
                    <div>
                      <!-- 课件页 -->
                      <el-card class="box-card">
                        <img style="width:100%" src="./../../../../../assets/images/article.jpg" alt="">
                      </el-card>
                      <!-- 分页 -->
                      <pagination></pagination>
                    </div>
                </div>
            </el-col>
            <!-- 右侧知识结构 -->
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <!-- 本书知识展示 -->
                <knowledge-show></knowledge-show>
                <!-- 全库知识结构 -->
                <knowledge-struct></knowledge-struct>
              </div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import Pagination from './../../../commonView/Pagination'
import KnowledgeShow from './../../../commonView/KnowledgeShow'
import KnowledgeStruct from './knowledgeStruct'
export default {
  name: 'CoursewarePreview',
  components: {
    Pagination,
    KnowledgeShow,
    KnowledgeStruct
  },
  data () {
    return {
        list: [
            {id: 1, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 2, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 3, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 4, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 5, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 6, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 7, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 8, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 9, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 10, coursewareImg: require('./../../../../../assets/images/article.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'}
        ],
        swiperOption: {
            pagination: '.swiper-pagination',
            autoplay: false,
            spaceBetween: 20,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        // 通过item的数量判断页码，也就是轮播图的第几张图片
        const page = Math.floor(index / 5)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail-box {
  margin-bottom: 0.1rem;
  padding: 0.1rem;
  background: #fdffff;
}
.detail-title{
  display flex
  justify-content space-between
  align-items center
  margin-bottom .1rem
}
.title-left{
  border-left 3px solid #00ae80
  padding-left .06rem
}
/* 轮播展示课件图片 */
.flex-box{
    display flex
    justify-content space-around
    padding 0 .5rem
}
.file-img{
    text-align: center
    background: #f2f3f4
    padding: .1rem
}
.swiper-box{
    position relative
    margin-bottom: .1rem
    /* border 1px solid red */
}
.swiper-button-prev1{
    left .1rem
}
.swiper-button-next1{
    right .1rem
}

</style>