<!--
 * @Author: lixiaodi
 * @Date: 2020-03-20 17:03:40
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-20 17:50:58
 -->
<template>
    <div style="margin-bottom: .1rem">
        <!-- 标题 -->
        <div class="detail-title">
            <div class="title-left">全库知识结构</div>
        </div>
        <!-- 图表显示 -->
        <div class="knoledge-content">
            <div class="content-top">
                <!-- 图表 -->
                <div style="margin-bottom: .2rem">
                    <img style="width:100%" src="./../../../../../assets/images/echarKno.jpg" alt="">
                </div>
                <!-- 内容 -->
                <el-row :gutter="20">
                    <el-col :span="8" v-for="item of list" :key="item.id">
                        <div class="grid-content bg-purple flex-box">
                            <div class="img-box">
                                <img style="width:100%" :src="item.imgUrl" alt="">
                            </div>
                            <div>
                                <span>{{item.text}}</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 章节展示 -->
        <div class="knoledge-content">
            <!-- 外部(章节) -->
            <el-tabs type="border-card" class="out-tab">
                <el-tab-pane :label="item.lable" v-for="item of tabArr" :key="item.id">
                    <!-- 内部(页码) -->
                    <el-tabs type="border-card" :tab-position="tabPosition" class="inner-tab">
                        <el-tab-pane :label="pageItem.lable" v-for="pageItem of item.content" :key="pageItem.id">
                            {{pageItem.content}}
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
  name: 'KnowledgeStruct',
  data() {
      return {
          list:[
              {id: 1, imgUrl: require('./../../../../../assets/images/article.png'), text: 'XML'},
              {id: 2, imgUrl: require('./../../../../../assets/images/article.png'), text: 'SKOS'},
              {id: 3, imgUrl: require('./../../../../../assets/images/article.png'), text: 'SKOS'}
          ],
          tabPosition: 'left',
          tabArr: [
              {id: 1, lable: '第一章节', 
                content: [
                    {id: 1, lable: '第一页', content: '第一页'},
                    {id: 2, lable: '第二页', content: '第二页'},
                    {id: 3, lable: '第三页', content: '第三页'},
                    {id: 4, lable: '第四页', content: '第四页'},
                    {id: 5, lable: '第五页', content: '第五页'},
                    {id: 6, lable: '第四页', content: '第四页'}
                ]
              },
              {id: 2, lable: '第二章节', content: '第二章'},
              {id: 3, lable: '第三章节', content: '第三章'},
              {id: 4, lable: '第四章节', content: '第四章'},
              {id: 5, lable: '第五章节', content: '第四章'},
              {id: 6, lable: '第四章节', content: '第四章'}
          ]
      }
  },
}
</script>
<style lang="stylus" scoped>
/* 标题 */
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
/* 内容 */
.knoledge-content{
    border-top 1px solid #e2e3e4
    padding .1rem 0
}
/* 文章页展示 */
.flex-box{
    display flex
    align-items flex-end
}
.img-box{
    width 1rem
}
</style>