<template>
  <div>
      <el-tabs type="border-card">
        <!-- 师资交易 -->
        <el-tab-pane label="师资交易">
          <div>
            <el-button size='mini' type="info" plain>查看详情</el-button>
            <el-button size='mini' type="info" plain>导出订单</el-button>
          </div>
          <hr  style="background: #333;height: 1px;border: none;"/>

          <el-form :inline="true" :model="ruleForm" class="demo-form-inline" size="mini" ref="ruleForm">
            <el-form-item prop="status">
              <el-select v-model="ruleForm.status" placeholder="交易状态" >
                <el-option label="交易状态" value="1"></el-option>
                <el-option label="进行中" value="2"></el-option>
                <el-option label="已完结" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="user" >
              <el-input v-model="ruleForm.user" placeholder="请输入关键字"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button @click="resetForm('ruleForm')" type="primary">重置</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain>查询</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                border
                @selection-change="handleSelectionChange">
                <el-table-column
                align="center"
                type="selection"
                >
                </el-table-column>
                <el-table-column
                align="center"
                type=index
                label="序号"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="course"
                label="主讲课程"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="area"
                label="授课区域"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="teacher"
                label="主讲教师"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="buyer"
                label="购买方"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="biddingtime"
                label="竞拍时间"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="total"
                label="授课总时长"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="residue"
                label="剩余课时"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="unitprice"
                label="单价"
                >
                </el-table-column> 
                <el-table-column
                align="center"
                prop="num"
                label="数量"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="totalprices"
                label="总价"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="attachmentagreement"
                label="附件协议"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="status"
                label="交易状态"
                >
                </el-table-column>

            </el-table>

            <el-pagination
              background
              :page-sizes="[10, 20, 50, 100]"
              layout="total, sizes, prev, pager, next, jumper"
              :total=totalCount
              class="sorter">
            </el-pagination>
          </div>
        </el-tab-pane>
        <!-- 在线消息 -->
        <el-tab-pane label="在线消息">在线消息</el-tab-pane>
        <!-- 课时发售 -->
        <el-tab-pane label="课时发售">
          <!-- 按钮 -->
          <div>
            <el-button size='mini' type="info" plain>查看详情</el-button>
            <el-button size='mini' type="info" plain>课时发布</el-button>
            <el-button size='mini' type="info" plain>删除选中</el-button>
          </div>
          <!-- 横线 -->
          <hr  style="background: #333;height: 1px;border: none;"/>
          <!-- form 表单 -->
          <el-form :inline="true" :model="formData" class="demo-form-inline" size="mini" ref="formData">
            <el-form-item prop="status" >
              <el-select v-model="formData.status" placeholder="交易状态" >
                <el-option label="交易状态" value="1"></el-option>
                <el-option label="已开拍" value="2"></el-option>
                <el-option label="未开始" value="3"></el-option>
                <el-option label="已完结" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="user" >
              <el-input v-model="formData.user" placeholder="请输入关键字"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button @click="resetForm('formData')" plain type="primary">重置</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain>查询</el-button>
            </el-form-item>
          </el-form>
           <!-- 数据渲染 -->
          <div>
            <el-table
                ref="multipleTable"
                :data="Classtimesell"
                tooltip-effect="dark"
                border
                @selection-change="handleSelectionChange">
                <el-table-column
                align="center"
                type="selection"
                >
                </el-table-column>
                <el-table-column
                align="center"
                type=index
                label="序号"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="course"
                label="主讲课程"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="area"
                label="授课区域"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="teacher"
                label="主讲教师"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="buyertime"
                label="竞拍时长"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="biddingtime"
                label="竞拍时间"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="total"
                label="授课总时长"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="residue"
                label="剩余课时"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="unitprice"
                label="单价"
                >
                </el-table-column> 
                <el-table-column
                align="center"
                prop="num"
                label="数量"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="totalprices"
                label="总价"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="attachmentagreement"
                label="附件协议"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="status"
                label="交易状态"
                >
                </el-table-column>

            </el-table>

            <el-pagination
                background
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next, jumper"
                :total=totalCount
                class="sorter">
            </el-pagination>
          </div> 
        </el-tab-pane>
        <!-- 我的服务协议 -->
        <el-tab-pane label="我的服务协议">
          <div>
            <el-button size='mini' type="info" plain>查看详情</el-button>
            <el-button size='mini' type="info" plain>导出订单</el-button>
          </div>
          <hr  style="background: #333;height: 1px;border: none;"/>
          <el-form :inline="true" :model="agreementForm" class="demo-form-inline" size="mini" ref="agreementForm">
            <el-form-item prop="user" >
              <el-input v-model="agreementForm.user" placeholder="请输入关键字"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button @click="resetForm('agreementForm')" type="primary">重置</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain>查询</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-table
                ref="multipleTable"
                :data="agreementList"
                tooltip-effect="dark"
                border
                @selection-change="handleSelectionChange">
                <el-table-column
                align="center"
                type="selection"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="ContractnNum"
                label="协议编号"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="ContractName"
                label="协议名称"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="ContractSign"
                label="协议签署"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="owner"
                label="甲方"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="partyB"
                label="乙方"
                >
                </el-table-column>
                  <el-table-column
                align="center"
                prop="type"
                label="协议签订方式"
                >
                </el-table-column>
                <el-table-column
                align="center"
                prop="time"
                label="协议签订时间"
                >
                </el-table-column>
            </el-table>

            <el-pagination
                background
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next, jumper"
                :total=totalCount
                class="sorter">
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
 name:'teacher',
 data() {
   return {
     ruleForm:{
       status:'',
       user:''
     },
     formData:{
       status:'',
       user:''
     },
     agreementForm:{
       user:''
     },
     totalCount:500,
     tableData:[
       {
         course:'铁道基础进阶',
         area:'北京通州马',
         teacher:'刘海',
         buyer:'长虹',
         biddingtime:'2019-08-08',
         total:8,
         residue:3,
         unitprice:5297,
         num:5,
         totalprices:'22610.00',
         attachmentagreement:'xxxxxx',
         status:'进行中'
       },
       {
         course:'铁道基础进阶',
         area:'北京通州马',
         teacher:'刘海',
         buyer:'长虹',
         biddingtime:'2019-08-08',
         total:8,
         residue:3,
         unitprice:5297,
         num:5,
         totalprices:'22610.00',
         attachmentagreement:'xxxxxx',
         status:'进行中'
       },
       {
         course:'铁道基础进阶',
         area:'北京通州马',
         teacher:'刘海',
         buyer:'长虹',
         biddingtime:'2019-08-08',
         total:8,
         residue:3,
         unitprice:5297,
         num:5,
         totalprices:'22610.00',
         attachmentagreement:'xxxxxx',
         status:'进行中'
       },
       {
         course:'铁道基础进阶',
         area:'北京通州马',
         teacher:'刘海',
         buyer:'长虹',
         biddingtime:'2019-08-08',
         total:8,
         residue:3,
         unitprice:5297,
         num:5,
         totalprices:'22610.00',
         attachmentagreement:'xxxxxx',
         status:'进行中'
       },
       {
         course:'铁道基础进阶',
         area:'北京通州马',
         teacher:'刘海',
         buyer:'长虹',
         biddingtime:'2019-08-08',
         total:8,
         residue:3,
         unitprice:5297,
         num:5,
         totalprices:'22610.00',
         attachmentagreement:'xxxxxx',
         status:'进行中'
       },
     ],
     Classtimesell:[
       {
         course:'铁道基础进阶',
         area:'北京通州马',
         teacher:'刘海',
         buyertime:'1小时',
         biddingtime:'2019-08-08 12:00',
         total:8,
         residue:"14-15",
         unitprice:5297,
         num:5,
         totalprices:'22610.00',
         attachmentagreement:'xxxxxx',
         status:'已开拍'
       },
     ],
     agreementList:[
      {
       ContractnNum:"001",
       ContractName:'教学资源共享文件',
       ContractSign:'双方同意',
       owner:'甲方',
       partyB:'乙方',
       type:'网上签订',
       time:'2019-08-08'
      },
      {
       ContractnNum:'002',
       ContractName:'教学资源共享文件',
       ContractSign:'双方同意',
       owner:'甲方',
       partyB:'乙方',
       type:'网上签订',
       time:'2019-08-08'
      },
      {
       ContractnNum:'003',
       ContractName:'教学资源共享文件',
       ContractSign:'双方同意',
       owner:'甲方',
       partyB:'乙方',
       type:'网上签订',
       time:'2019-08-08'
      },
      {
       ContractnNum:'004',
       ContractName:'教学资源共享文件',
       ContractSign:'双方同意',
       owner:'甲方',
       partyB:'乙方',
       type:'网上签订',
       time:'2019-08-08'
      },
      {
       ContractnNum:'005',
       ContractName:'教学资源共享文件',
       ContractSign:'双方同意',
       owner:'甲方',
       partyB:'乙方',
       type:'网上签订',
       time:'2019-08-08'
      },
     ],
     multipleSelection: []
   }
 },
 methods: {
       resetForm(e) {
        this.$refs[e].resetFields()
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  }
}
</script>

<style lang="stylus" scoped>
.sorter {
text-align center
margin-top .1rem
}
</style>