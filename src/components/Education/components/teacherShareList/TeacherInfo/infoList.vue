<!--
 * @Author: lixiaodi
 * @Date: 2020-03-19 13:38:12
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 13:54:44
 -->
<template>
  <div>
      <!-- 标题 -->
      <div class="resource-top">{{title}}</div>
      <!-- 列表展示 -->
      <div class="resource-bottom">
        <div class="list-item" v-for="(item,index) of bookList" :key="item.id">
          <div class="item-left">
              <p class="bookIcon">[{{index+1}}]</p>
              <p style="margin-left: .06rem;">{{item.bookName}}</p>
          </div>
          <div class="item-right">
              <div>{{item.releaseDate}}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'InfoList',
  data() {
      return {
          title: '最多浏览',
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
</style>