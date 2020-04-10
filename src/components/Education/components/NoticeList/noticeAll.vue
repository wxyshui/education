<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 17:52:17
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 09:32:52
 -->
<template>
  <div class="list-box">
    <!-- 内容 -->
    <el-row class="row-sty" v-for="item of noticeList" :key="item.id">
        <el-col :span="24">
            <div class="grid-content bg-purple-dark flex-box">
                <div class="notice-left">
                    <el-avatar icon="el-icon-user-solid" class="margin-right"></el-avatar>
                    <p class="margin-right">{{item.name}}</p>
                    <p class="margin-right">{{item.content}}</p>
                </div>
                <div>2019-07-31</div>
            </div>
        </el-col>
    </el-row>
    <!-- 分页 -->
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from './../../commonView/Pagination'
export default {
  name: 'NoticeAll',
  components: {
    Pagination
  },
  data() {
      return {
          noticeList: [
              {id: 1, name: 'admin', content: '轨道交通行业教育服务系统'},
              {id: 2, name: 'admin', content: '轨道交通行业教育服务系统'},
              {id: 3, name: 'admin', content: '轨道交通行业教育服务系统'},
              {id: 4, name: 'admin', content: '轨道交通行业教育服务系统'},
              {id: 5, name: 'admin', content: '轨道交通行业教育服务系统'},
              {id: 6, name: 'admin', content: '轨道交通行业教育服务系统'},
              {id: 7, name: 'admin', content: '轨道交通行业教育服务系统'}
          ]
      }
  },
}
</script>
<style lang="stylus" scoped>
.list-box{
    background: #fff;
    padding: .1rem;
}
.row-sty{
    border-bottom: 1px solid #efefef
}
.flex-box{
    display flex
    justify-content space-between
    line-height 3
    padding .1rem 0
}
.notice-left{
    display flex
}
.margin-right{
    margin-right .2rem
}
</style>