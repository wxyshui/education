<!--
 * @Author: wangxiaoyu
 * @Date: 2020-03-15 10:30:21
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-13 17:22:06
 -->
<template>
  <div>
     <!-- 搜索 导航-->
    <second-nav></second-nav>
    <!-- 个人详情 -->
    <personal-details></personal-details>
  </div>
</template>

<script>
import SecondNav from './secondNav';
import PersonalDetails from './personalDetails'
import { getUser } from '../../untils/auth.js'
export default {
  name:'ShopCartIndex',
  components:{
    SecondNav,
    PersonalDetails
  },
   created() {
    if (!getUser()) {
      this.$router.push('/login')
    } 
  },
}
</script>

<style>

</style>