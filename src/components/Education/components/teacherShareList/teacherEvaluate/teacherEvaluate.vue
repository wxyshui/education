<!--
 * @Author: lixiaodi
 * @Date: 2020-03-22 09:49:32
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-22 14:58:54
 -->
<template>
    <div>
        <!-- 面包屑 -->
        <bread-crumb></bread-crumb>
        <!-- 标签栏 -->
        <evaluate-label></evaluate-label>
        <!-- 评价列表 -->
        <evaluate-list></evaluate-list>
    </div>
</template>

<script>
import EvaluateLabel from './evaluateLabel'
import EvaluateList from './evaluateList'
import BreadCrumb from '../../../commonView/Breadcrumb'
export default {
  name: 'TeacherEvaluate',
  components: {
      EvaluateLabel,
      EvaluateList,
      BreadCrumb,
  }
}
</script>
<style lang="stylus" scoped>

</style>