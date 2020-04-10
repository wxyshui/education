<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 11:31:35
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-13 13:31:37
 -->
<template>
  <div class="footer-box">
    <el-row :gutter="60" class="margin-all" style="margin:0">
        <el-col :span="16">
            <div class="grid-content bg-purple">
                <ul class="footer-nav">
                    <li class="footer-nav-li" v-for="(item,index) of footerNavList" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <div class="footer-weChat">
                    <img src="./../../../assets/images/code.jpg" alt="">
                    <div class="margin-left">
                        <p class="weight">微信公众号</p>
                        <p>搜索关注：中国轨道交通</p>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <div class="footer-copy">CopyRight @中国铁道出版社 2018-2019</div>
  </div>
</template>

<script>
export default {
  name: 'EducationFooter',
  data() {
      return {
          footerNavList: ['关于我们','法律声明','隐私政策','廉政举报','联系我们']
      }
  }
}
</script>
<style lang="stylus" scoped>
.footer-box{
    color #ffffff
}
.margin-all{
    padding .1rem
}
.footer-nav{
    display flex
    flex-flow row nowrap
    line-height 3
    justify-content space-around
    align-items center
}
.footer-nav-li{
    cursor pointer
}
.footer-weChat{
    display flex
    align-items center
}
.margin-left{
    margin-left .1rem
}
.footer-copy{
    text-align center
    padding .1rem
    border-top 1px solid #46454c
    margin 0 .5rem
}
</style>