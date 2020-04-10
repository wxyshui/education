<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 09:14:59
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-16 17:32:39
 -->
<template>
    <el-row :gutter="40" class="box-sty">
        <el-col :span="12" style="border-right: 1px solid #efefef;">
            <div class="grid-content bg-purple">
                <share-list :content="courseware"></share-list>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <share-list :content="file"></share-list>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import ShareList from './../../commonView/shareList'
export default {
  name: 'EducationShare',
  components: {
      ShareList
  },
  data() {
      return {
        courseware: {id: 1, title: '课件分享'},
        file: {id: 2, title: '文档文献分享'}
      }
  },
}
</script>
<style lang="stylus" scoped>
.box-sty{
    margin-bottom .1rem
    padding-bottom .1rem
    border-bottom 1px solid #efefef
}
</style>