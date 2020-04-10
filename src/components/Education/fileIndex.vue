<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 15:46:27
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 15:53:19
 -->
<template>
  <div>
    <!-- 搜索 -->
    <education-search></education-search>
    <!-- 最新资讯 -->
    <education-new></education-new>
    <!-- 精品文档 -->
    <education-tip></education-tip>
    <!-- 文档资源 -->
    <education-resources></education-resources>
    <!-- 相关网站导航 -->
    <education-website></education-website>
  </div>
</template>

<script>
import EducationSearch from './commonView/educationSearch'
import EducationNew from './components/CoursewareShareList/educationNew'
import EducationTip from './components/CoursewareShareList/educationTip'
import EducationResources from './components/CoursewareShareList/educationResources'
import EducationWebsite from './components/CoursewareShareList/educationWebsite'
export default {
  name: 'FileIndex',
  components: {
      EducationSearch,
      EducationNew,
      EducationTip,
      EducationResources,
      EducationWebsite
  }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>