<template>
  <div>
    <!-- 余额 -->
    <el-tabs type="border-card">
      <el-tab-pane label="我的余额" class="shopcart">
        <!-- 余额 -->
        <div class="my">
          <div class="balance">
            <span>账户余额:</span>
            <span style="color:#ff2222">100</span>
            <i>元</i>
          </div>
          <el-button type="text"  @click="jump('/education/personalcenter/recharge')">充值</el-button>
          <el-button type="text"  @click="jump('/education/personalcenter/bankcard')">我的银行卡</el-button>
        </div>
        <!-- 资金 -->
        <el-form :inline="true" :model="formdata" class="demo-form-inline" size="mini">
          <el-form-item style="color:#00b087">资金记录</el-form-item>
          <el-form-item>
            <el-select v-model="formdata.region" placeholder="请选择筛选条件">
              <el-option label="充值记录" value="shanghai"></el-option>
              <el-option label="消费记录" value="beijing"></el-option>
              <el-option label="体现记录" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间范围:">
            <el-date-picker
              <el-date-picker
              v-model="formdata.value"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" plain>查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 资金记录渲染 -->
        <el-table :data="tableData" style="width: 100%" v-loading="loading" border>
          <el-table-column prop="date" label="日期"  align="center" style="font-size:0.14rem"></el-table-column>
          <el-table-column prop="money" label="金额（元）"  align="center"></el-table-column>
          <el-table-column prop="balance" label="账户余额（元）"  align="center"></el-table-column>
          <el-table-column prop="types" label="类型" align="center" ></el-table-column>
        </el-table>
        <!-- 分页器 -->
        
        <sorter :totalCount=totalCount></sorter>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Sorter from '../../../ivew/pagination'
import { jump } from '../../../../untils/auth.js'
export default {
  name: "shopbalance",
  components: {
    Sorter
  },
  data() {
    return {
      formdata: {
        user: "",
        region: "",
        value: ""
      },
      tableData: [
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
        {
          date:"2016-07-10 10:10",
          money:"+120.00",
          balance:'100.00',
          types:"交易进账"
        },
      ],
      loading: false,
      totalCount: 100
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    jump
  }
};
</script>

<style lang="stylus" scoped>
.my {
  display: flex;
  font-size: 0.16rem;
  color: #333;
  margin-bottom: 0.1rem;

  .balance {
    width: 1.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    margin-right: 0.2rem;
  }
}
.sorter {
text-align center
margin-top .1rem
}
</style>