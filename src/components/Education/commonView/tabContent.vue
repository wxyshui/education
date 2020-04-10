<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 14:51:41
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 15:39:10
 -->
<template>
    <div>
        <!-- 内容 -->
        <el-row :gutter="20" v-for="(row,index) of rows" :key="index">
            <el-col :span="12" v-for="item of row" :key="item.id">
                <div class="grid-content bg-purple flex-box">
                    <div class="courseware-img">
                        <img style="height: 2rem;" :src="item.coursewareImg" alt="">
                    </div>
                    <div class="courseware-info">
                        <p class="courseware-info-top">{{item.title}}</p>
                        <div class="courseware-info-bottom">¥ <span>{{item.see}}</span></div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'tabContent',
  data() {
        return {
            coursewareList: [
                {id: 1, coursewareImg: require('./../../../assets/images/new.jpg'), title: '基础培训', see: '99'},
                {id: 2, coursewareImg: require('./../../../assets/images/new.jpg'), title: '基础培训', see: '99'},
                {id: 3, coursewareImg: require('./../../../assets/images/new.jpg'), title: '基础培训', see: '99'},
                {id: 4, coursewareImg: require('./../../../assets/images/new.jpg'), title: '基础培训', see: '99'}
            ],
            currentPage: 1
        }
    },
    // 拆分课件
    computed: {
        rows (){
            // 存放分行以后的课件
            const rows = []
            // 遍历课件数据
            this.coursewareList.forEach((item,index)=>{
                // 分行
                const row = Math.floor(index/4)
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
.flex-box{
    display flex
    margin-bottom .1rem
}
.courseware-img{
    margin-right .1rem
}
.courseware-info{
    box-sizing border-box
    width: 100%
    padding .1rem
    display flex
    flex-direction: column
}
.courseware-info-top{
    flex 1
}
.courseware-info-bottom{
    text-align right
}
</style>