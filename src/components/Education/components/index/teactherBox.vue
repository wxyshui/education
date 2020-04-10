<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 13:38:35
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 14:15:20
 -->
<template>
  <div class="teacher-info-box" @click="gotoTeacherInfo">
      <img :src="content.img" alt="">
      <div class="teacher-info-content">
          <div class="teacher-info-name">{{content.name}}</div>
          <p class="teacher-info-introduce">{{content.info}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TeactherBox',
    components:{},
    props: ['content'],
    methods: {
        gotoTeacherInfo (){
            this.$router.push({path: 'teacherInfo'})
        }
    }
}
</script>
<style lang="stylus" scoped>
.teacher-info-box{
    display flex
    margin-bottom .1rem
}
.teacher-info-name{
    background #ffffff
    color #000000
    width 0.5rem
    line-height 2
    text-align center
    margin-bottom .1rem
}
.teacher-info-content{
    background #00a87c
    color #fff
    padding .1rem
    box-sizing border-box
}
.teacher-info-introduce{
    text-indent 2em
    line-height 1.5
}
</style>