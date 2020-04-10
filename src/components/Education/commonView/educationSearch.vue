<!--
 * @Author: lixiaodi
 * @Date: 2020-03-12 16:56:30
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-12 19:45:10
 -->
<template>
    <div class="education-search">
        <!-- 查询 -->
        <div class="search-box">
            <!-- 查询输入框 -->
            <div class="search-input">
                <!-- 下拉选择 -->
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <!-- 分割线 -->
                <div class="line"></div>
                <!-- <div class="line"></div> -->
                <el-input v-model="condition" placeholder="请输入内容"></el-input>
            </div>
            <div class="search-btn">
                <el-button @click="search">搜索</el-button>
            </div>
        </div>
        <!-- 查询条件提示 -->
        <ul class="condition-ul">
            <li class="condition-li" v-for="(item,index) of conditionList" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'EducationSearch',
  data() {
      return {
        condition: '',
        options: [{
          value: 1,
          label: '课件'
        }, {
          value: 2,
          label: '文档文献'
        }, {
          value: 3,
          label: '教师'
        }],
        value: '',
        conditionList: ['铁道培训','教学资源','优质服务','基础大全']
      }
  },
  methods:{
    search() {
        
        if (this.value == 1) {
            this.$router.push('/education/coursewareList')
        }
        else if(this.value == 2) {
            this.$router.push('/education/fileList')

        }else {
            this.$router.push('/education/teacherList')
        }
    }
  }
}
</script>
<style lang="stylus" scoped>
.education-search{
    margin .2rem 4rem
    margin-top 0
}
.search-box{
    border 1px solid #00b087
    display flex
    flex-flow row nowrap
    align-items center
}
.search-input{
    display flex
    flex-flow row nowrap
    width 100%
    align-items center
}
.search-input /deep/ .el-input__inner{
    border none
}
.line{
    height .2rem
    width 2px
    background: #efefef
}
.el-button{
    border none
    border-radius 0
    background #00b087
    color #ffffff
    line-height 1.2
}
/* 查询条件 */
.condition-ul{
    display: flex;
    padding: .1rem;
    color: #aaa;
}
.condition-li{
    margin-right .1rem
    cursor pointer
}
</style>