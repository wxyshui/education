<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 15:42:14
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 15:59:34
 -->
<template>
  <div>
    <!-- 面包屑导航 -->
    <bread-crumb></bread-crumb>
    <!-- 搜索列表 -->
    <teacher-select></teacher-select>
    <!-- 查询结果-搜索 -->
    <select-search></select-search>
    <!-- 文档列表展示 -->
    <file-list></file-list>  
  </div>
</template>

<script>
import BreadCrumb from './../../commonView/Breadcrumb'
import TeacherSelect from './../../components/teacherShareList/teacherSelect'
import SelectSearch from './../../components/teacherShareList/selectSearch'
import FileList from './../../components/fileShareList/fileList'
export default {
    name: 'FileShare',
    components: {
        BreadCrumb,
        TeacherSelect,
        SelectSearch,
        FileList
    }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>