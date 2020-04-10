<template>
  <div style="width:1.5rem">
     <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#00b087"
      
      router>
    <el-submenu index='1'>
      <template slot='title'>我的钱包</template>
      <el-menu-item index='/education/personalcenter/balance'>余额</el-menu-item>
      <el-menu-item index="/education/personalcenter/integral">积分</el-menu-item>
      <el-menu-item index='/education/personalcenter/bankcard'>银行卡</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot='title'>订单中心</template>
        <el-menu-item index="/education/personalcenter/myindent">我的订单</el-menu-item>
        <el-menu-item index="/education/personalcenter/orderevaluate">订单评价</el-menu-item>
    </el-submenu>
    <el-menu-item index="/education/personalcenter/myprofile">我分享的资料</el-menu-item>
    <el-menu-item index="/education/personalcenter/teacher">我是教师</el-menu-item>
    <el-menu-item index='/education/personalcenter/shopindex'>我的购物车</el-menu-item>
    <el-menu-item index='/education/personalcenter/localresource'>本地资源</el-menu-item>
  </el-menu>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.el-menu-vertical-demo {
    margin-top .2rem
}
</style>