<!--
 * @Author: lixiaodi
 * @Date: 2020-03-22 10:29:29
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-22 14:44:28
 -->
<template>
  <div  class="desc-box ">
    <el-row :gutter="20">
        <!-- 左侧 -->
        <el-col :span="6" style="border-right: 1px solid #efefef;">
            <div class="grid-content bg-purple">
                <div class="num-top">
                    <p style="font-weight:700">小明老师</p>
                    <p>十年铁路，一朝汇总</p>
                </div>
                <div class="num-sty">
                    <div>
                        <p class="font-color">752</p>
                        <p>授课课时</p>
                    </div>
                    <div>
                        <p class="font-color">99.3%</p>
                        <p>好评率</p>
                    </div>
                </div>
            </div>
        </el-col>
        <!-- 右侧标签 -->
        <el-col :span="16" style="margin-left:.2rem">
            <div class="grid-content bg-purple">
                <div class="right-top">大家都在说</div>
                <div class="right-sty">
                    <el-button 
                    class="tag-item" 
                    v-for="item of tagList" 
                    :key="item.id"
                    type= primary
                    size= mini
                    plain
                    >
                        {{item.tagName}}
                    </el-button>
                </div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EvaluateLabel',
  data() {
      return {
          tagList: [
              {id: 1, tagName: '全部评价（999+）'},
              {id: 2, tagName: '讲解细致（1173）'},
              {id: 3, tagName: '知识体系新（864）'},
              {id: 4, tagName: '教学难度合适（615）'},
              {id: 5, tagName: '性价比高（372）'},
              {id: 6, tagName: '讲课流畅（305）'},
              {id: 7, tagName: '值得购买（229）'},
              {id: 8, tagName: '案例新颖（201）'},
              {id: 9, tagName: '思路清晰（193）'},
              {id: 10, tagName: '我看行（186）'}
          ]
      }
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.desc-box{
    background #ffffff
    margin-bottom .3rem
    padding .2rem
}
/* 左侧 */
.num-top{
    text-align: center
    line-height: 2
    margin-bottom: .1rem
}
.num-sty{
    display flex
    justify-content space-around
    align-items center
    line-height 1.5
    text-align center
}
.font-color{
    color #ff1d2a
    font-weight 700
}
/* 右侧 */
.right-top{
    margin-bottom .15rem
    margin-left 0.1rem
}
.right-sty{
    width 8rem
    display flex
    flex-wrap wrap
    justify-content space-between
    
}
.tag-item{
    margin-left .1rem
    margin-bottom 0.15rem 
    width 1.44rem
    text-align center
    }

</style>