<!--
 * @Author: lixiaodi
 * @Date: 2020-03-12 14:58:16
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-13 17:22:06
 -->
<template>
  <div>
    <!-- 搜索 -->
    <education-search></education-search>
    <!-- 轮播图 -->
    <education-carousel></education-carousel>
    <!-- 师资资源共享 -->
    <education-teacher></education-teacher>
    <!-- 课件/文档分享 -->
    <education-share></education-share>
    <!-- 公告/资讯 -->
    <education-notice></education-notice>
    <!-- 分类 -->
    <education-class></education-class>
  </div>
</template>

<script>
import EducationSearch from './commonView/educationSearch'
import EducationCarousel from './components/index/educationCarousel'
import EducationTeacher from './components/index/educationTeacher'
import EducationShare from './components/index/educationShare'
import EducationNotice from './components/index/educationNotice'
import EducationClass from './components/index/educationClass'
export default {
    name: 'EducationIndex',
    components:{
      EducationSearch,
      EducationCarousel,
      EducationTeacher,
      EducationShare,
      EducationNotice,
      EducationClass
    }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>