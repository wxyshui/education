<template>
  <div class="inner">
    <el-container>
    <!-- 头部:一级导航 -->
    <el-header class="header-box" style="height:.8rem">
      <education-header></education-header>
    </el-header>  
    <!-- 内容 -->
    <el-main style="padding: .1rem .5rem;">
      <!-- 二级导航 -->
      <education-nav></education-nav>
      <!-- 内容 -->
      <router-view></router-view>
    </el-main>
    <!-- 底部 -->
    <el-footer class="footer-box" style="height:1.5rem">
      <education-footer></education-footer>
    </el-footer>
  </el-container>
  </div>
</template>

 
 
 <script>
 import EducationHeader from './commonView/educationHeader'
 import EducationNav from './commonView/educationNav'
 import EducationFooter from './commonView/educationFooter'
 export default {
   name: 'Education',
   components:{
     EducationHeader,
     EducationNav,
     EducationFooter,
   }
 }
 </script>
 <style lang="stylus" scoped>
 .header-box{
    padding .1rem .5rem
    border-bottom 1px solid #efefef
 }
 .footer-box{
    padding 0
    background:#302f37
 }
 </style>