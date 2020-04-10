<!--
 * @Author: lixiaodi
 * @Date: 2020-03-19 13:49:01
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 14:08:13
 -->
<template>
    <div class="detail-box">
        <!-- 标题 -->
        <model-title :content="title"></model-title>
        <!-- 内容 -->
        <div class="resource-bottom">
            <div class="list-item" v-for="(item,index) of bookList" :key="item.id">
                <div class="item-left">
                    <p class="bookIcon">[{{index+1}}]</p>
                    <p class="long" style="margin-left: .06rem;">{{item.bookName}}</p>
                </div>
                <div>{{item.bookAuthor}}</div>
                <div>{{item.source}}</div>
                <div class="item-right">
                    <div>{{item.num}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModelTitle from './../../../commonView/modelTitle'
export default {
  name: 'TeacherPublish',
  components: {
      ModelTitle
  },
  data() {
        return {
            title: '发表文件',
            bookList: [
                {id:1,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'},
                {id:2,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'},
                {id:3,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'},
                {id:4,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'},
                {id:5,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'},
                {id:6,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'},
                {id:7,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'},
                {id:8,bookName: '轨道交通基础入门轨道交通基础入门', releaseDate: '2019-01-01', bookAuthor: '小明',num: '1992(03)', source: '铁道学院'}
            ]
        }
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.detail-box{
  margin-bottom .1rem
  padding .1rem
  background #fdffff
}
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
    width 6rem
}
.long{
    overflow: hidden
    text-overflow:ellipsis
    white-space: nowrap
}
.item-right{
    display flex
    flex-flow row nowrap
}
.bookIcon{
    color #22c6b6
}
</style>