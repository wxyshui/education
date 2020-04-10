<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 18:07:09
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 14:22:43
 -->
<template>
  <div>
    <!-- 搜索 -->
    <education-search></education-search>
    <!-- 最新资讯 -->
    <education-new></education-new>
    <!-- 精品课件 -->
    <education-tip></education-tip>
    <!-- 课件资源 -->
    <education-resources></education-resources>
    <!-- 铁道小助手 -->
    <education-assistant></education-assistant>
    <!-- 相关网站导航 -->
    <education-website></education-website>
  </div>
</template>

<script>
import EducationSearch from './commonView/educationSearch'
import EducationNew from './components/CoursewareShareList/educationNew'
import EducationTip from './components/CoursewareShareList/educationTip'
import EducationResources from './components/CoursewareShareList/educationResources'
import EducationAssistant from './components/CoursewareShareList/educationAssistant'
import EducationWebsite from './components/CoursewareShareList/educationWebsite'
export default {
  name: 'CoursewareIndex',
  components: {
      EducationSearch,
      EducationNew,
      EducationTip,
      EducationResources,
      EducationAssistant,
      EducationWebsite
  }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>