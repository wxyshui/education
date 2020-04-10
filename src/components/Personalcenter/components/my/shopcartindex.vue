<template>
  <div>
    <!-- 购物车 -->
    <el-tabs type="border-card">
      <el-tab-pane label="购物车" class="shopcart">
        <img src="../../../../assets/images/shopping.png" alt />
        <p>购物车内暂时没有东西</p>
        <el-button size="medium" class="button_go" type='primary' plain>继续逛逛</el-button>
      </el-tab-pane>
    </el-tabs>
    <!-- 精品推荐 -->
    <el-card style="margin-top:.1rem">
      <!-- 标题 -->
      <div class="title-left">精品推荐</div>
      <!-- 推荐内容 -->
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(page, index) of pages" :key="index" class="flex-box">
            <!--循环显示的内容-->
            <div class="recom-box" v-for="item of page" :key="item.id">
              <div class="file-img">
                <img :src="item.coursewareImg" alt />
              </div>
              <div class="file-info">
                <p>{{item.title}}</p>
                <p>{{item.info}}</p>
                <div class="info-price">
                  <div>
                    ¥<span>{{item.price}}</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- 箭头 -->
        <div class="swiper-button-prev swiper-button-prev1"></div>
        <div class="swiper-button-next swiper-button-next1"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
name: "ShopccartPage";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 2,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 3,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 4,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 5,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 6,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 7,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 8,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 9,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 10,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        }
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: false,
        spaceBetween: 20,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        // 通过item的数量判断页码，也就是轮播图的第几张图片
        const page = Math.floor(index / 5);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
};
</script>

<style lang="stylus" scoped>
.shopcart {
  text-align: center;

  img {
    width: .5rem;
    height: .5rem;
    margin-top: 0.4rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.2rem;
    color: #00b087;
  }

  .button_go {
    margin-top: 0.4rem;
    margin-bottom: 1rem;
  }
}
.title-left{
  padding-left .06rem
  margin-bottom .2rem
  color #00b087
}
/* 内容 */
.flex-box{
    display flex
    justify-content space-around
}
.file-img{
    text-align: center;
    background: #f2f3f4;
    padding: .2rem;
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
}
/* 轮播 */
.swiper-box{
    position relative
}
.swiper-button-prev1{
    left -.15rem
    top 1.4rem
    color #00b087
}
.swiper-button-next1{
    right -.15rem
    top 1.3rem
}
</style>