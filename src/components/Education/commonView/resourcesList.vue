<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 11:46:40
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 13:39:50
 -->
<template>
  <div>
      <!-- 标题 -->
      <div class="resource-top">{{title}}</div>
      <!-- 课件展示 -->
      <el-row :gutter="20" class="resource-middle">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="middle-img">
              <img :src="example.img" alt="">
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <div class="middle-info">
              <div class="info-top">
                <p class="info-top-left">{{example.title}}</p>
                <p>{{example.name}}</p>
              </div>
              <p class="info-bottom">{{example.content}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 课件列表展示 -->
      <div class="resource-bottom">
        <div class="list-item" v-for="item of bookList" :key="item.id">
          <div class="item-left">
              <p class="bookIcon"><i class="iconfont iconshuben"></i></p>
              <p style="margin-left: .06rem;">{{item.bookName}}</p>
          </div>
          <div>{{item.bookAuthor}}</div>
          <div>{{item.releaseDate}}</div>
          <div class="item-right">
              <div class="see-btn">查看</div>
              <div class="btn-middle">|</div>
              <div class="download-btn">下载</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesList',
  data() {
      return {
          title: '最新课件',
          example: {id:1, img: require('./../../../assets/images/book.png'), title: '轨道交通基础入门', name: '小明', content: '2009年开始'},
          bookList: [
              {id:1,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2},
              {id:2,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2},
              {id:3,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2},
              {id:4,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2},
              {id:5,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2},
              {id:6,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2},
              {id:7,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2},
              {id:8,bookName: '轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: 2}
          ]
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
/* 头部标题 */ 
.resource-top{
  line-height 2
  color $backgroundCOlor
  font-weight 700
}
/* 举例展示 */ 
.resource-middle{
  
}
.middle-img{
  text-align center
  background #f2f3f4
  padding .1rem 0
  box-sizing border-box
}
.info-top{
  display flex
  justify-content space-between
  line-height 2
  border-bottom 1px solid #f5f6f7
  margin-bottom .1rem
}
.info-top-left{
  font-weight 700
}
.info-bottom{
  line-height 1.5
  text-indent 2em
}
/* 列表展示 */ 
.resource-bottom{

}
/* 资源列表 */
.list-item{
    display flex
    flex-flow row nowrap
    line-height 2
    justify-content space-between
    align-items: center;
}
.item-left{
    display flex
    flex-flow row nowrap
    align-items center
}
.item-right{
    display flex
    flex-flow row nowrap
}
.bookIcon{
    color #22c6b6
}
.see-btn{
  color: #4abb96

}
.btn-middle{
  margin 0 .1rem
}
.download-btn{
  color: #f0818b
}
</style>