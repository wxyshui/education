<template>
    <el-tabs type="border-card">
        <el-tab-pane label="我的竞拍">
            <div>
                <el-button size='mini' type="info" plain>查看当前竞拍</el-button>
                <el-button size='mini' type="info" plain>查看竞拍已完成</el-button>
            </div>
            <hr  style="background: #333;height: 1px;border: none;"/>
            <el-form :inline="true" :model="ruleForm" class="demo-form-inline" size="mini" ref="ruleForm">
                <el-form-item prop="status" >
                    <el-select v-model="ruleForm.status" placeholder="交易状态" >
                        <el-option label="全部" value="1"></el-option>
                        <el-option label="进行中" value="2"></el-option>
                        <el-option label="已完结" value="3"></el-option>
                    </el-select>
                    </el-form-item>
                    <el-form-item prop="user">
                        <el-input v-model="ruleForm.user" placeholder="请输入关键字"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button @click="resetForm('ruleForm')" type="primary">重置</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" plain>查询</el-button>
                    </el-form-item>
            </el-form>
            <!-- 数据渲染 -->
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
                prop="prices"
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
            <!-- 分页器 -->
             <el-pagination
                background
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next, jumper"
                :total=totalCount
                class="sorter">
            </el-pagination>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name:'Auction',
    data() {
        return {
            ruleForm:{
                status:'',
                user:''
            },
            tableData:[
                {
                    course:'铁道基础进阶',
                    area:'北京通州马',
                    teacher:'刘海',
                    buyer:'长虹',
                    biddingtime:'2019-08-08',
                    total:8,
                    residue:3,
                    prices:'22610.00',
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
                    prices:'22610.00',
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
                    prices:'22610.00',
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
                    prices:'22610.00',
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
                    prices:'22610.00',
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
                    prices:'22610.00',
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
                    prices:'22610.00',
                    attachmentagreement:'xxxxxx',
                    status:'进行中'
                },
             
            ],
            multipleSelection: [],
            totalCount:100
        }
    },
    methods: {
       resetForm(e) {
        this.$refs[e].resetFields()
    },
  }
}
</script>

<style lang='stylus' scoped>
.sorter {
text-align center
margin-top .1rem
}
</style>