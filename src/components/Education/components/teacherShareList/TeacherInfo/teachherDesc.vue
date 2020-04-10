<!--
 * @Author: lixiaodi
 * @Date: 2020-03-18 14:11:26
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-22 10:17:39
 -->
<template>
    <div class="desc-box">
        <el-row :gutter="20">
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <div class="desc-left">
                        <!-- 头像 -->
                        <div class="desc-left-img">
                            <img style="width:100%" src="./../../../../../assets/images/teacher.jpg" alt="">
                        </div>
                        <!-- 数量 -->
                        <div class="desc-left-num">
                            <div>
                                <p>商品评价</p>
                                <p>134</p>
                                <p class="seeBtn" @click="onSeeEval">查看评价</p>
                                </div>
                            <el-divider direction="vertical"></el-divider>
                            <div>
                                <p>收藏人数</p>
                                <p>589</p>
                                <p class="seeBtn" @click="onFollow">{{follow}}</p>
                            </div>
                            <el-divider direction="vertical"></el-divider>
                            <div>
                                <p>浏览件数</p>
                                <p>999+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="19">
                <div class="grid-content bg-purple">
                    <div class="desc-right">
                        <!-- 姓名 -->
                        <div class="right-top">
                            <p class="right-top-head">翟婉明——西南交通大学</p>
                            <p class="right-top-head2">铁路运输;工业通用技术及设备；公路水路运输</p>
                        </div>
                        <!-- 介绍 -->
                        <div style="margin-bottom:.1rem">
                            <p>
                                <span>教师编号：</span>
                                <span>8975701</span>
                            </p>
                            <p>
                                <span>擅长课程：</span>
                                <span>教育类</span>
                            </p>
                            <p>
                                <span>教师认证时间：</span>
                                <span>2019-07-31</span>
                            </p>
                            <p  class="right-rate">
                                <span>教师评分：</span>
                                <el-rate v-model="value1"></el-rate>
                            </p>
                            <p>
                                <span>授课时间段：</span>
                                <span>周末15:00-20:00</span>
                            </p>
                            <p>
                                <span>总上传量：</span>
                                <span>306</span>
                            </p>
                            <p>
                                <span>总下载量</span>
                                <span>116060</span>
                            </p>
                        </div>
                        <!-- 按钮 -->
                        <el-button type="primary">在线联系</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'TeachherDesc',
  data() {
      return {
          value1: null,
          follow: '关注教师'
      }
  },
  methods: {
      onSeeEval (){
          this.$router.push({path: 'teacherEvaluate'})
      },
      onFollow (){
          this.follow = this.follow == '关注教师' ? '取消关注' : '关注教师'
      }
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.desc-box{
    background #fdffff
    margin-bottom .1rem
    padding .1rem
}
/* 左侧 */
.desc-left-img{
    margin .1rem 0
    margin-bottom .2rem
}
.desc-left-num{
    display flex
    line-height 2
    align-items center
    text-align center
    justify-content space-between
}
.el-divider--vertical{
    height .4rem
}
.seeBtn:hover{
    color #00af81
}
/* 右侧 */ 
.desc-right{
    line-height 2
}
    .right-top{
        margin-bottom .1rem
    }
        .right-top-head{
            font-weight 700
            font-size .2rem
        }
        .right-top-head2{
            font-size .15rem
        }
            .right-rate{
                display flex
                align-items center
            }
</style>