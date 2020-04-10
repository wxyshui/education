<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 09:21:21
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 16:53:01
 -->
<template>
    <div class="share-box">
        <!-- 标题 -->
        <model-title :content="title"></model-title>
        <!-- 资源简介 -->
        <div class="share-resource">
            <div class="resource-img">
                <img style="height: 1rem;" src="./../../../assets/images/book.png" alt="book">
            </div>
            <div class="resource-info">
                <div class="info-title">
                    <p>{{info.shareName}}</p>
                    <p>{{info.userName}}</p>
                </div>
                <div class="info-content">{{info.content}}</div>
            </div>
        </div>
        <!-- 资源列表 -->
        <div class="share-list">
            <div class="list-item" v-for="item of shareList" :key="item.id" @click="gotoInfo">
                <div class="item-left">
                    <p class="bookIcon"><i class="iconfont iconshuben"></i></p>
                    <p style="margin-left: .06rem;">{{item.bookName}}</p>
                </div>
                <div class="item-right">
                    <p>{{item.bookAuthor}}</p>
                    <p style="margin-left: 1rem;">浏览次数</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModelTitle from './../commonView/modelTitle'
export default {
    name: 'ShareList',
    components: {
      ModelTitle,
    },
    props: ['content'],
    data() {
        return {
            title: this.content.title,
            info: {
                shareName: '轨道交通基础入门',
                userName: '小明',
                content: '2009年开始从事交通行业教研工作，对不同的交通知识有着深深的了解，在校十多年的教学工作中，先后担任教学处主任...'
            },
            shareList: [
                {id:1,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2},
                {id:2,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2},
                {id:3,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2},
                {id:4,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2},
                {id:5,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2},
                {id:6,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2},
                {id:7,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2},
                {id:8,bookName: '轨道交通基础入门', bookAuthor: '小明',num: 2}
            ]
        }
    },
    methods: {
        gotoInfo (){
            this.$router.push({path: 'coursewareInfo'})
        }
    }
}
</script>
<style lang="stylus" scoped>
.share-box{
    /* padding .1rem */
}
/* 标题 */
.share-title{
    display flex
    justify-content space-between
    border-left 2px solid #00b087
    padding-left: 0.1rem;
    margin-bottom .1rem
}
.title-sty{
    font-weight 700
}
.title-more{
    color #46454c
    cursor pointer
}
/* 资源简介 */
.share-resource{
    border-top 1px solid #efefef
    padding .1rem
    display flex
    flex-flow row nowrap
    /* align-items center */
    justify-content space-between
}
.resource-img{
    padding .1rem .2rem
    background  #f2f3f4
}
.resource-info{
    margin-left: .3rem;
}
.info-title{
    display flex
    justify-content space-between
    line-height 3
    border-bottom 1px solid #efefef
    margin-bottom .1rem
}
.info-content{
    text-indent 2em
    line-height 1.5
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