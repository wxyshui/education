<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 10:08:08
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 09:42:28
 -->
<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <div class="grid-content bg-purple result-box">
        <!-- 查询结果列表 -->
        <div>
          <div class="teacher-result-list" v-for="item of resultList" :key="item.id">
            <img class="result-img" :src="item.img" alt="">
            <div>
              <div class="row-one">
                <p class="margin-right">教师姓名：<span>{{item.name}}</span> </p>
                <p>教学时段：<span>{{item.date}}</span></p>
              </div>
              <div class="row-one">
                <p class="margin-right">擅长服务：<span>{{item.serveice}}</span> </p>
                <p>累计评价：<span>{{item.sum}}</span></p>
              </div>
              <div class="row-one">教师简介：</div>
              <div class="info-content">{{item.content}}</div>
              <div class="row-one end">点赞</div>
            </div>
          </div>
        </div>
        <!-- 分页 -->
        <pagination></pagination>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple left-box">
        <div class="example-title">师资推荐</div>
        <div class="example-content">
          <div class="example-item" v-for="item of exampleList" :key="item.id">
            <img class="img-bottom" :src="item.img" alt="">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Pagination from './../../commonView/Pagination'
export default {
  name: 'SelectList',
  components: {
    Pagination
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  data() {
    return {
      currentPage: 5,
      resultList: [
        {id: 1, name: '马冬梅', date: '9:00-1200', serveice: '培训、实战', sum: '999+', img: require('./../../../../assets/images/teacher.jpg'), content: '中国轨道交通大学教务处主任，一直致力于轨道交通安全教育，有着十多年的教学经验，在校期间培训了大批优秀人才，其中，有125个硕士...'},
        {id: 2, name: '马冬梅', date: '9:00-1200', serveice: '培训、实战', sum: '999+', img: require('./../../../../assets/images/teacher.jpg'), content: '中国轨道交通大学教务处主任，一直致力于轨道交通安全教育，有着十多年的教学经验，在校期间培训了大批优秀人才，其中，有125个硕士...'},
        {id: 3, name: '马冬梅', date: '9:00-1200', serveice: '培训、实战', sum: '999+', img: require('./../../../../assets/images/teacher.jpg'), content: '中国轨道交通大学教务处主任，一直致力于轨道交通安全教育，有着十多年的教学经验，在校期间培训了大批优秀人才，其中，有125个硕士...'},
        {id: 4, name: '马冬梅', date: '9:00-1200', serveice: '培训、实战', sum: '999+', img: require('./../../../../assets/images/teacher.jpg'), content: '中国轨道交通大学教务处主任，一直致力于轨道交通安全教育，有着十多年的教学经验，在校期间培训了大批优秀人才，其中，有125个硕士...'},
        {id: 5, name: '马冬梅', date: '9:00-1200', serveice: '培训、实战', sum: '999+', img: require('./../../../../assets/images/teacher.jpg'), content: '中国轨道交通大学教务处主任，一直致力于轨道交通安全教育，有着十多年的教学经验，在校期间培训了大批优秀人才，其中，有125个硕士...'},
        {id: 6, name: '马冬梅', date: '9:00-1200', serveice: '培训、实战', sum: '999+', img: require('./../../../../assets/images/teacher.jpg'), content: '中国轨道交通大学教务处主任，一直致力于轨道交通安全教育，有着十多年的教学经验，在校期间培训了大批优秀人才，其中，有125个硕士...'}
      ],
      exampleList: [
        {id: 1, name: '李飞', img: require('./../../../../assets/images/teacher.jpg')},
        {id: 2, name: '李飞', img: require('./../../../../assets/images/teacher.jpg')},
        {id: 3, name: '李飞', img: require('./../../../../assets/images/teacher.jpg')},
        {id: 4, name: '李飞', img: require('./../../../../assets/images/teacher.jpg')}
      ]
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.result-box{
  padding .1rem
  padding-top: 0
}
/* 师资列表 */
.teacher-result-list{
  display flex
  margin-bottom .1rem
  background #fdffff
}
.result-img{
  margin-right .1rem
}
.row-one{
  display flex
  line-height 2
}
.margin-right{
  width: 3rem
}
.info-content{
  text-indent 2em
  line-height 1.5
}
.end{
  justify-content: flex-end
  margin-right: .1rem
}
/* 分页 */ 
.el-pagination{
  text-align center
}
/* 推荐 */
.left-box{
  background:#fdffff;
  padding: .1rem;
}
.example-title{
  border-left: 2px solid $backgroundCOlor;
  padding-left: .1rem;
  margin-bottom: .1rem;
}
.example-content{
  text-align center
  padding .1rem
  border-top 1px solid #edeeee
}
.example-item{
  margin-bottom .3rem
}
.img-bottom{
  margin-bottom .1rem
}
</style>