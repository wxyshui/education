<!--
 * @Author: lixiaodi
 * @Date: 2020-03-12 18:40:01
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 17:10:28
 -->
<template>
    <el-row :gutter="20" class="notice-margin">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <notice-list :content="noticeTitle"></notice-list>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <notice-list :content="newTitle"></notice-list>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import NoticeList from './../../commonView/noticeList'
export default {
  name: 'EducationNotice',
  components: {
      NoticeList
  },
  data() {
      return {
          noticeTitle: '最新公告',
          newTitle: '最新资讯'
      }
  },
}
</script>
<style lang="stylus" scoped>
.notice-margin{
    margin-bottom .1rem
    border-bottom 1px solid #efefef
}
</style>