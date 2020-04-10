<!--
 * @Author: lixiaodi
 * @Date: 2020-03-20 13:41:06
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-20 17:04:45
 -->
<template>
    <div style="margin-bottom: .1rem">
        <!-- 标题 -->
        <div class="detail-title">
            <div class="title-left">本书知识展示</div>
        </div>
        <!-- 内容 -->
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
  name: 'KnowledgeShow',
  data() {
      return {
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
/* 页签样式 */
.out-tab .el-tabs--border-card>.el-tabs__content{
    padding 0
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    color: #fff;
    background-color: #00ae80;
}
.out-tab >>> .el-tabs__item{
    height: .3rem;
    line-height .3rem;
}
/* 外层章节左右箭头 */ 
.out-tab >>> .el-tabs__nav-next, .out-tab >>> .el-tabs__nav-prev{
    line-height .3rem
}
.out-tab >>> .el-tabs__header{
    border 1px solid #e4e7ee
}
.out-tab >>> .el-tabs__item.is-top:nth-child(2){
    padding-left: .1rem;
}

</style>