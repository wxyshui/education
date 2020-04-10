<!--
 * @Author: lixiaodi
 * @Date: 2020-03-18 10:55:43
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 11:00:52
 -->
<template>
  <div style="margin-bottom:.1rem">
    <!-- 面包屑导航 -->
    <bread-crumb></bread-crumb>
    <!-- 搜索 -->
    <notice-top :content="title"></notice-top>
    <!-- 资讯列表 -->
    <notice-all></notice-all>
  </div>
</template>

<script>
import BreadCrumb from './../../commonView/Breadcrumb'
import NoticeTop from './../NoticeList/noticeTop'
import NoticeAll from './../NoticeList/noticeAll'
export default {
  name: 'NewsList',
  components: {
      BreadCrumb,
      NoticeTop,
      NoticeAll
  },
  data() {
      return {
          title: '最新资讯'
      }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>