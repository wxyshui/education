<template>
 
  <el-tabs type="border-card">
    <el-tab-pane label="充值账户">
      <!-- <el-form  :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="账户余额：">
          <div>
            <span>100</span>元
          </div>
        </el-form-item>
        <el-form-item label="充值金额：">
          <el-input v-model="formInline.user" placeholder="输入充值金额" style="width:1.2rem"></el-input>
          <span>元</span>
        </el-form-item>
        
        <el-form-item label="选择充值方式：">
          <el-tabs  type="card">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-form-item>
      </el-form> -->
    </el-tab-pane>
  </el-tabs>
  
</template>

<script>
export default {
  name:'recharge',
  data() {
    return {
      formInline:{
        user:''
      }
    }
  }
}
</script>

<style>

</style>