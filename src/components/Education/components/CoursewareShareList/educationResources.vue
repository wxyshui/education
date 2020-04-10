<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 11:24:12
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 14:20:40
 -->
<template>
    <div style="margin-bottom:.1rem">
        <!-- 标题行 -->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <model-title :content="title"></model-title>
                </div>
            </el-col>
        </el-row>
        <!-- 内容 -->
        <el-row :gutter="20" class="resource-content" style="margin-left:0;margin-right:0">
            <el-col :span="12" style="border-right: 1px solid #edeeee;">
                <div class="grid-content bg-purple">
                    <resources-list></resources-list>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <resources-list></resources-list>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ModelTitle from './../../commonView/modelTitle'
import ResourcesList from './../../commonView/resourcesList'
export default {
  name: 'EducationResources',
  components: {
      ModelTitle,
      ResourcesList
  },
  data() {
      return {
          title: '课件资源'
      }
  },
}
</script>
<style lang="stylus" scoped>
.resource-content{
    box-sizing border-box
    background #feffff
    padding .1rem
}
</style>