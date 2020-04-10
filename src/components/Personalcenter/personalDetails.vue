<template>
  <div>
    <el-container>
      <el-aside width="1.5rem">
          <layout-left></layout-left>
      </el-aside>
      <el-main>
          <router-view :key='$route.path'></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LayoutLeft from './components/layoutleft'
export default {
    components:
    {
       LayoutLeft
    }
};
</script>

<style>
</style>