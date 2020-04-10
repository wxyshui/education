<!--
 * @Author: lixiaodi
 * @Date: 2020-03-19 16:45:32
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 17:25:40
 -->
<template>
  <div style="margin-bottom:.1rem">
    <!-- 面包屑导航 -->
    <bread-crumb></bread-crumb>
    <!-- 课件简介 -->
    <teachher-desc></teachher-desc>
    <!-- 课件详情 -->
    <courseware-detail></courseware-detail>
    <!-- 资源预览 -->
    <courseware-preview></courseware-preview>
  </div>
</template>

<script>
import BreadCrumb from './../../../commonView/Breadcrumb'
import TeachherDesc from './../../teacherShareList/TeacherInfo/teachherDesc'
import CoursewareDetail from './coursewareDetail'
import CoursewarePreview from './coursewarePreview'
export default {
  name: 'CoursewareInfo',
  components: {
    BreadCrumb,
    TeachherDesc,
    CoursewareDetail,
    CoursewarePreview
  }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>