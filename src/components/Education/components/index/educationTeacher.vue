<!--
 * @Author: lixiaodi
 * @Date: 2020-03-12 19:37:21
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 14:16:42
 -->
<template>
  <div class="teacher-box">
    <!-- 标题栏 -->
    <div class="teacher-title">师资资源共享</div>
    <!-- 师资展示 -->
    <div>
      <el-row :gutter="20" v-for="(row,index) of rows" :key="index">
        <el-col :span="12" v-for="item of row" :key="item.id">
          <div class="grid-content bg-purple">
            <!-- 教师信息 -->
            <teacther-box :content="item"></teacther-box>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 更多 -->
    <div class="teacher-flex-box">
      <div class="teacher-more" @click="gotoTeacherList">查看更多师资资源>></div>
    </div>
  </div>
</template>

<script>
// import TeactherInfo from './../../components/teactherInfo'
import TeactherBox from './teactherBox'
export default {
  name: 'EducationTeacher',
  components: {
    TeactherBox
  },
  data() {
    return {
      teacherList: [
        {id: 1, name: '张晓明', img: require('./../../../../assets/images/teacher.jpg'), info: '2009年开始从事交通行业教研工作，对不同的交通知识有着很深的了解，先后担任教学处主任，交通行业审员、交通知识主讲教师...'},
        {id: 2, name: '张晓明', img: require('./../../../../assets/images/teacher.jpg'), info: '2009年开始从事交通行业教研工作，对不同的交通知识有着很深的了解，先后担任教学处主任，交通行业审员、交通知识主讲教师...'},
        {id: 3, name: '张晓明', img: require('./../../../../assets/images/teacher.jpg'), info: '2009年开始从事交通行业教研工作，对不同的交通知识有着很深的了解，先后担任教学处主任，交通行业审员、交通知识主讲教师...'},
        {id: 4, name: '张晓明', img: require('./../../../../assets/images/teacher.jpg'), info: '2009年开始从事交通行业教研工作，对不同的交通知识有着很深的了解，先后担任教学处主任，交通行业审员、交通知识主讲教师...'}
      ]
    }
  },
  computed: {
    rows (){
      const rows = []
      this.teacherList.forEach((item,index)=>{
        const row = Math.floor(index/2)
        if(!rows[row]){
          rows[row] = []
        }
        rows[row].push(item)
      })
      return rows
    }
  },
  methods: {
    // 跳转到更多师资资源
    gotoTeacherList (){
      // this.$router.replace('teacherList')
      this.$router.push({path: 'teacherList'})
    }
  },
}
</script>
<style lang="stylus" scoped>
.teacher-box{
    margin-bottom .2rem
}
.teacher-title{
    font-weight 700
    border-left 2px solid #00b087
    padding-left .1rem
    margin-bottom .1rem
}
.teacher-flex-box{
  display flex
  justify-content center
}
.teacher-more{
  width 2rem
  background #00a677
  line-height 2.5
  text-align center
  padding 0 .2rem
  color #fff
}
</style>