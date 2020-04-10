<!--
 * @Author: lixiaodi
 * @Date: 2020-03-18 11:57:15
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 13:49:46
 -->
<template>
  <div style="margin-bottom:.1rem">
    <!-- 面包屑导航 -->
    <bread-crumb></bread-crumb>
    <!-- 教师简介 -->
    <teachher-desc></teachher-desc>
    <!-- 教师详情 -->
    <teacher-detail></teacher-detail>
    <!-- 相关课件推荐 -->
    <teacher-recommend></teacher-recommend>
    <!-- 教师文献 -->
    <teacher-article></teacher-article>
    <!-- 发表文件 -->
    <teacher-publish></teacher-publish>
  </div>
</template>

<script>
import BreadCrumb from './../../../commonView/Breadcrumb'
import TeachherDesc from './teachherDesc'
import TeacherDetail from './teacherDetail'
import TeacherRecommend from './teacherRecommend'
import TeacherArticle from './teacherArticle'
import TeacherPublish from './teacherPublish'
export default {
  name: 'teacherInfo',
  components: {
    BreadCrumb,
    TeachherDesc,
    TeacherDetail,
    TeacherRecommend,
    TeacherArticle,
    TeacherPublish
  }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>