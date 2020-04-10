<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 17:45:31
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-17 17:37:30
 -->
<template>
  <!-- <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:.1rem">
        <el-breadcrumb-item :to="{ path: '/education' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>师资资源</el-breadcrumb-item>
  </el-breadcrumb>-->
  <el-breadcrumb separator=">" style="margin-bottom:.1rem">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <router-link :to="item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      // console.log( this.$route.matched);
      
      const first = matched[0];
      if (first && first.name !== "Education") {
        matched = [{ path: "/education", meta: { title: "首页" } }].concat(
          matched
        );
      }
      this.levelList = matched;
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-breadcrumb {
  line-height: 2;
}
</style>