<template>
  <div>
     <el-tabs type="border-card">
      <el-tab-pane label="添加银行卡" class="addbankcard">
        <el-form label-position="right" label-width="1rem" :model="formLabelAlign" size="mini"class="formLabelAlign" >
          <el-form-item label="真实姓名：">
            <el-input v-model="formLabelAlign.name" disabled style='width:2rem'></el-input>
          </el-form-item>
          <el-form-item label="身份证号：">
            <el-input v-model="formLabelAlign.IDnum" disabled style='width:2rem'></el-input>
          </el-form-item>
          <el-form-item label="银行卡号：">
            <el-input v-model="formLabelAlign.banknum" placeholder="输入银行卡号" style='width:2rem'></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="formLabelAlign.phone" placeholder="请输入预留手机号" style='width:2rem'></el-input>
          </el-form-item>
          <!-- 勾选框 -->
          
          <el-form-item label="支付协议：">
            <a href="#">《商家管理后台快捷支付协议》</a>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>同意协议并确定</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name:'addbankcard',
  data() {
    return {
      formLabelAlign:{
      name:'小明',
      IDnum:'111111111111111111',
      banknum:'',
      phone:'',
      checked:false
    }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .formLabelAlign {
    margin-left 2.6rem
  }
</style>