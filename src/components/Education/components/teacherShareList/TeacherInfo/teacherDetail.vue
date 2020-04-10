<!--
 * @Author: lixiaodi
 * @Date: 2020-03-18 15:34:19
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-22 10:02:16
 -->
<template>
  <div class="detail-box">
    <div class="detail-top">
      <!-- 标题 -->
      <div class="detail-title">
        <div class="title-left">教师详情</div>
        <div>
          <span>教师评价</span>
          <span>99+</span>
        </div>
      </div>
      <!-- 详情内容 -->
      <el-table border :data="tableData" style="width: 100%" :show-header="showHeader">
          <el-table-column prop="date" label="" ></el-table-column>
          <el-table-column prop="name" label=""></el-table-column>
          <el-table-column prop="address" label=""></el-table-column>
      </el-table>
    </div>
    <!-- 课时竞拍 -->
    <div>
      <p class="h-title">他的课时竞拍</p>
      <el-table border :data="tableData" 
        :header-cell-style="{'background':'#fdffff'}" 
        style="width: 100%">
          <el-table-column prop="date" label="教师" align="center"></el-table-column>
          <el-table-column prop="name" label="时段/时长" align="center"></el-table-column>
          <el-table-column prop="address" label="起拍价" align="center"></el-table-column>
          <el-table-column prop="address" label="当前竞价" align="center"></el-table-column>
          <el-table-column prop="address" label="|" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)">我要出价</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
    <!-- 在授课时 -->
    <div>
      <p class="h-title">他的在授课时</p>
      <el-table border :data="tableData" 
        :header-cell-style="{'background':'#fdffff'}" 
        style="width: 100%">
          <el-table-column prop="date" label="教师" align="center"></el-table-column>
          <el-table-column prop="name" label="时段/时长" align="center"></el-table-column>
          <el-table-column prop="address" label="起拍价" align="center"></el-table-column>
          <el-table-column prop="address" label="当前竞价" align="center"></el-table-column>
          <el-table-column prop="address" label="|" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)">立即购买</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherDetail',
  data() {
    return {
      showHeader: false,
      tableData: [
          {
            date: '教师姓名：小明',
            name: '授课课时：5000',
            address: '课件形式：pdf'
          }, {
            date: '教师姓名：小明',
            name: '授课课时：5000',
            address: '课件形式：pdf'
          }, {
            date: '教师姓名：小明',
            name: '授课课时：5000',
            address: '课件形式：pdf'
          }, {
            date: '教师姓名：小明',
            name: '授课课时：5000',
            address: '课件形式：pdf'
          }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail-box{
  margin-bottom .1rem
  padding .1rem
  background #fdffff
}
.detail-title{
  display flex
  justify-content space-between
  align-items center
  margin-bottom .1rem
}
.title-left{
  border-left 3px solid #00ae80
  padding-left .06rem
}
.h-title{
  line-height 3
  color #00af81
  font-weight 700
}
/* 处理表格 */
/* 表格内背景颜色 */
.el-table th, .el-table tr,.el-table td{
  border: 0;
  background-color: transparent;
}
/* 使表格背景透明 */
.detail-box >>> .el-table tr {
  background-color: #fdffff;
  /* background-color: transparent; */
}
/* 表格表头字体颜色 */
.detail-box >>> .el-table thead {
  background-color: #fdffff
}
</style>