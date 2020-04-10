<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 14:01:12
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 14:19:42
 -->
<template>
    <div style="margin-bottom: .1rem">
        <!-- 标题行 -->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <model-title :content="title"></model-title>
                </div>
            </el-col>
        </el-row>
        <!-- 内容 -->
        <el-row :gutter="20" v-for="(row,index) of rows" :key="index">
            <el-col :span="8" v-for="item of row" :key="item.id" style="margin-bottom:.1rem">
                <div class="grid-content bg-purple">
                    <img :src="item.img" alt="" style="width:100%">
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ModelTitle from './../../commonView/modelTitle'
export default {
  name: 'EducationWebsite',
  components: {
      ModelTitle,
  },
  data() {
      return {
          title: '相关网站导航',
          logoList: [
              {id: 1, img: require('./../../../../assets/images/websiteLogo.jpg')},
              {id: 2, img: require('./../../../../assets/images/websiteLogo.jpg')},
              {id: 3, img: require('./../../../../assets/images/websiteLogo.jpg')},
              {id: 4, img: require('./../../../../assets/images/websiteLogo.jpg')},
              {id: 5, img: require('./../../../../assets/images/websiteLogo.jpg')},
              {id: 6, img: require('./../../../../assets/images/websiteLogo.jpg')}
          ]
      }
  },
  // 拆分课件
    computed: {
        rows (){
            // 存放分行以后的课件
            const rows = []
            // 遍历课件数据
            this.logoList.forEach((item,index)=>{
                // 分行
                const row = Math.floor(index/3)
                // 如果没有行，添加行，如果有，给行添加数据
                if(!rows[row]){
                    rows[row] = []
                    rows[row].push(item)
                }else{
                    rows[row].push(item)
                }
            })
            
            return rows
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>