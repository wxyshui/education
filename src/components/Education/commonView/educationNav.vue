<!--
 * @Author: lixiaodi
 * @Date: 2020-03-12 16:41:55
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 15:51:51
 -->
<template>
  <el-row style="margin-bottom: .1rem;">
    <el-col :span="24">
      <div class="grid-content bg-purple-dark flex-box">
        <ul class="nav">
            <li 
                @click="onHandleClickEvent(item)"
                class="nav-li" v-for="item of navList" :key="item.id"
            >
                {{item.title}}
            </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
    name: 'educationNav',
    data() {
        return {
            navList: [
                {id:1, title: '首页', path: '/education/index'},
                {id:2, title: '师资分享', path: '/education/teacherIndex'},
                {id:3, title: '课件分享', path: '/education/coursewareIndex'},
                {id:4, title: '文档分享', path: '/education/fileIndex'}
            ]
        }
    },
    methods: {
        onHandleClickEvent (item){
            this.$router.push({path: item.path})
        }
    },
}
</script>
<style lang="stylus" scoped>
.flex-box{
    display flex
    flex-direction row
}
.nav{
    display flex
    flex-flow row nowrap
    justify-content space-between
    line-height 3
}
.nav-li{
    margin-right .5rem
    cursor pointer
}
li:hover{
    color: #00b087
    /* border-bottom 2px solid #00b087 */
    font-weight 700
}
</style>