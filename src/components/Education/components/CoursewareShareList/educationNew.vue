<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 09:36:58
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 11:21:13
 -->
<template>
    <div style="margin-bottom:.1rem">
        <!-- 标题行 -->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <model-title :content="title"></model-title>
                </div>
            </el-col>
        </el-row>
        <!-- 内容行 -->
        <el-row :gutter="20" class="new-row" style="margin-left:0;margin-right:0;">
            <!-- 根据时间展示内容 -->
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <img style="width:100%;" src="./../../../../assets/images/new.jpg" alt="">
                    <div class="new-box">
                        <p class="new-title">隧道整体</p>
                        <p class="new-content">隧道整体</p>
                    </div>
                </div>
            </el-col>
            <!-- 内容列表展示 -->
            <el-col :span="16">
                <div class="grid-content bg-purple-light">
                    <el-timeline>
                        <el-timeline-item :timestamp="item.timestamp" placement="top" v-for="item of timeLine" :key="item.id">
                            <el-card>
                                <h4>{{item.title}}</h4>
                                <p>{{item.content}}</p>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ModelTitle from './../../commonView/modelTitle'
export default {
  name: 'educationNew',
  components: { 
      ModelTitle
  },
  data() {
      return {
          title: '最新资讯',
          newLeft: {
              id: 1, title: '隧道整体', 
          },
          timeLine: [
              {id:1, timestamp: '2018/4/12', title: '更新 Github 模板', content: '王小虎 提交于 2018/4/12 20:46'},
              {id:2, timestamp: '2018/4/3', title: '更新 Github 模板', content: '王小虎 提交于 2018/4/3 20:46'},
              {id:3, timestamp: '2018/4/2', title: '更新 Github 模板', content: '王小虎 提交于 2018/4/2 20:46'}
          ]
      }
  },
}
</script>
<style lang="stylus" scoped>
.new-row{
    box-sizing border-box
    padding .1rem
    background #feffff
    margin-bottom .1rem
}
    .new-box{
        background #f2f3f4
        padding .1rem
    }
        .new-title{
            line-height 2
            font-weight 700
        }
        .new-content{
            line-height 1.5
            text-indent 2em
        }
</style>