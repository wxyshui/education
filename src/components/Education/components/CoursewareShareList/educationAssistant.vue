<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 14:23:45
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 17:17:23
 -->
<template>
    <div style="margin-bottom: .1rem">
        <!-- 标题行 -->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <!-- 标题 -->
                    <div class="share-title">
                        <p class="title-sty">{{title}}</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 内容 -->
        <el-tabs type="border-card">
            <el-tab-pane label="课件匹配">
                <tab-content></tab-content>
            </el-tab-pane>
            <el-tab-pane label="文档匹配">
                <tab-content></tab-content>
            </el-tab-pane>
            <el-tab-pane label="教师匹配">
                <tab-content></tab-content>
            </el-tab-pane>
            <el-tab-pane label="优选推送">
                <tab-content></tab-content>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import TabContent from './../../commonView/tabContent'
export default {
  name: 'EducationAssistant',
  components: {
      TabContent
  },
  data() {
      return {
          title: '铁道小助手'
      }
  }
}
</script>
<style lang="stylus" scoped>
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
</style>