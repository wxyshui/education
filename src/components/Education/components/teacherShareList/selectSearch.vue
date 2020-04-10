<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 10:42:52
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-16 13:46:33
 -->
<template>
    <div style="margin-bottom: .1rem;">
        <el-row :gutter="20" style="border-bottom: 1px solid #e9eaeb;">
            <el-col :span="12">
                <div class="grid-content bg-purple sort-list">
                    <div class="sort-btn" v-for="(item,index) of sortBtnList" :key="index">{{item}}</div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple search-key">
                    <div class="search-input">
                        <div class="input-text">
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
                        </div>
                        <el-button plain size="small">查询</el-button>
                    </div>
                    <el-button plain size="small" class="reset-btn">重置</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'SelectSearch',
  data() {
      return {
          sortBtnList: ['最新课件', '最多浏览', '评论最多', '价格排序'],
          input: ''
      }
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.sort-list{
    display flex
}
    .sort-btn{
        line-height 2.5
        background $backgroundCOlor
        color #fff
        padding 0 .2rem
        border 1px solid #e8e9ea
    }
.search-key{
    display flex
    justify-content flex-end
}
    .search-input{
        display flex
        border 1px solid $backgroundCOlor
        margin-right .1rem
        width 3rem
    }
    .input-text{
        width 100%
    }
    .search-input >>> .el-button{
        background $backgroundCOlor
        border-radius 0
        border none
        color #fff
    }
    .search-input >>> .el-input__inner{
        height .3rem
        line-height .3rem
        border none
        border-radius 0
    }
    .reset-btn{
        border-radius 0
        color $backgroundCOlor
        border 1px solid $backgroundCOlor
    }
</style>