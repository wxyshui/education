<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 16:36:25
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 11:01:29
 -->
<template>
  <div style="margin-bottom:.1rem">
    <!-- 面包屑导航 -->
    <bread-crumb></bread-crumb>
    <!-- 搜索 -->
    <notice-top :content="title"></notice-top>
    <!-- 公告列表 -->
    <notice-all></notice-all>
  </div>
</template>

<script>
import BreadCrumb from './../../commonView/Breadcrumb'
import NoticeTop from './noticeTop'
import NoticeAll from './noticeAll'
export default {
  name: 'NoticeList',
  components: {
      BreadCrumb,
      NoticeTop,
      NoticeAll
  },
  data() {
      return {
          title: '最新公告'
      }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>