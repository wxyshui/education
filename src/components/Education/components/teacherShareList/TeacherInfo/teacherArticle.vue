<!--
 * @Author: lixiaodi
 * @Date: 2020-03-19 13:09:34
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 13:38:57
 -->
<template>
  <div class="detail-box">
    <!-- 标题 -->
    <div class="detail-title">
        <div class="title-left">教师文献</div>
        <div class="title-right">
            <div>
                <span class="title-weight">总发文量：</span>
                <span>306</span>
            </div>
            <div style="margin-left:.1rem">
                <span class="title-weight">总下载量：   </span>
                <span>116060</span>
            </div>
        </div>
    </div>
    <!-- 内容 -->
    <el-row :gutter="20" class="resource-content" style="margin-left:0;margin-right:0">
        <el-col :span="12" style="border-right: 1px solid #edeeee;">
            <div class="grid-content bg-purple">
                <info-list></info-list>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light">
                <info-list></info-list>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import InfoList from './infoList'
export default {
  name: 'TeacherArticle',
  components: {
      InfoList
  }
}
</script>
<style lang="stylus" scoped>
.detail-box{
  margin-bottom .1rem
  padding .1rem
  background #fdffff
}
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
.title-right{
    display flex
}
.title-weight{
    font-weight 700
}
</style>