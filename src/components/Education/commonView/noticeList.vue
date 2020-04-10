<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 10:57:48
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 16:15:21
 -->
<template>
  <div class="notic-box">
    <!-- 标题 -->
    <model-title :content="title"></model-title>
    <!-- 内容图片 -->
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 内容列表 -->
    <div class="notic-list">
      <div class="notic-list-item" v-for="item of noticeList" :key="item.id" @click="gotoNoticeInfo">
        <p>{{item.noticName}}</p>
        <p>{{item.noticDate}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ModelTitle from './../commonView/modelTitle'
export default {
  name: "NoticeList",
  props: ["content"],
  components: {
      ModelTitle
  },
  data() {
    return {
      title: this.content,
      noticeList: [
        { id: 1, noticName: "轨道交通通告", noticDate: "2019-08-07" },
        { id: 2, noticName: "轨道交通通告", noticDate: "2019-08-07" },
        { id: 3, noticName: "轨道交通通告", noticDate: "2019-08-07" },
        { id: 4, noticName: "轨道交通通告", noticDate: "2019-08-07" },
        { id: 5, noticName: "轨道交通通告", noticDate: "2019-08-07" },
        { id: 6, noticName: "轨道交通通告", noticDate: "2019-08-07" }
      ]
    };
  },
  methods: {
    gotoNoticeInfo (){
      this.$router.push({path: 'noticeDetail'})
    }
  },
};
</script>
<style lang="stylus" scoped>
/* 标题 */
.share-title {
  display: flex;
  justify-content: space-between;
  border-left: 2px solid #00b087;
  padding-left: 0.1rem;
  margin-bottom: 0.1rem;
}

.title-sty {
  font-weight: 700;
}

.title-more {
  color: #46454c;
  cursor: pointer;
}

/* 轮播图 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

/* 列表 */
.notic-list {
  padding: 0 0.1rem;
  margin-bottom: 0.1rem;
}

.notic-list-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  line-height: 2;
}
</style>