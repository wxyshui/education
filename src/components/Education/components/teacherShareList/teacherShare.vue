<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 16:19:43
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 16:02:19
 -->
<template>
  <div style="margin-bottom:.1rem">
    <!-- 面包屑导航 -->
    <bread-crumb></bread-crumb>
    <!-- 搜索列表 -->
    <teacher-select></teacher-select>
    <!-- 查询结果-搜索 -->
    <select-search></select-search>
    <!-- 查询结果-展示 -->
    <select-list></select-list>
  </div>
</template>

<script>
import BreadCrumb from './../../commonView/Breadcrumb'
import TeacherSelect from './../../components/teacherShareList/teacherSelect'
import SelectSearch from './../../components/teacherShareList/selectSearch'
import SelectList from './../../components/teacherShareList/selectList'
export default {
    name: 'TeacherShare',
    components: {
      BreadCrumb,
      TeacherSelect,
      SelectSearch,
      SelectList
    }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>