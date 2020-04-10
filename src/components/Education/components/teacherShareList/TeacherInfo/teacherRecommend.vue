<!--
 * @Author: lixiaodi
 * @Date: 2020-03-19 10:42:02
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 18:44:33
 -->
<template>
  <div class="desc-box">
    <!-- 标题 -->
    <div class="title-left">相关课件推荐</div>
    <!-- 推荐内容 --> 
    <div class="swiper-box">
        <swiper :options="swiperOption">    
            <swiper-slide v-for="(page, index) of pages" :key="index" class="flex-box">
                <!--循环显示的内容-->
                <div class="recom-box" v-for="item of page" :key="item.id">
                    <div class="file-img">
                        <img :src="item.coursewareImg" alt="">
                    </div>
                    <div class="file-info">
                        <p>{{item.title}}</p>
                        <p>{{item.info}}</p>
                        <div class="info-price">
                            <div>¥ <span>{{item.price}}</span></div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!-- 箭头 -->
        <div class="swiper-button-prev swiper-button-prev1"></div>
        <div class="swiper-button-next swiper-button-next1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherRecommend',
  data () {
    return {
        list: [
            {id: 1, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 2, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 3, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 4, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 5, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 6, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 7, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 8, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 9, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
            {id: 10, coursewareImg: require('./../../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'}
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
.desc-box{
    background #fdffff
    margin-bottom .1rem
    padding .1rem
}
.title-left{
  border-left 3px solid #00ae80
  padding-left .06rem
  margin-bottom .1rem
}
/* 内容 */
.flex-box{
    display flex
    justify-content space-around
}
.file-img{
    text-align: center;
    background: #f2f3f4;
    padding: .3rem;
}
.file-info{
    background: #fdffff;
    line-height: 2;
    padding: .1rem;
    box-sizing: border-box;
    text-align: center;
}
.info-price{
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
}
/* 轮播 */
.swiper-box{
    position relative
}
.swiper-button-prev1{
    left .1rem
}
.swiper-button-next1{
    right .1rem
}
</style>