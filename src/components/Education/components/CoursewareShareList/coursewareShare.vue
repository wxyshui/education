<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 14:12:08
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-16 18:11:35
 -->
<template>
    <div>
        <!-- 面包屑导航 -->
        <bread-crumb></bread-crumb>
        <!-- 搜索列表 -->
        <teacher-select></teacher-select>
        <!-- 查询结果-搜索 -->
        <select-search></select-search>
        <!-- 课件列表展示 -->
        <courseware-list></courseware-list>
    </div>
</template>

<script>
import BreadCrumb from './../../commonView/Breadcrumb'
import TeacherSelect from './../../components/teacherShareList/teacherSelect'
import SelectSearch from './../../components/teacherShareList/selectSearch'
import CoursewareList from './../../components/CoursewareShareList/coursewareList'
export default {
  name: 'CoursewareShare',
  components: {
      BreadCrumb,
      TeacherSelect,
      SelectSearch,
      CoursewareList
  }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>