<template>
    <el-tabs type="border-card">
        <el-tab-pane label="信息审核"  class="audit">
            <div id="success">
                <div>
                    <i class="el-icon-check" style="font-size: 1rem;"></i>
                    <p style="font-weight: bold;margin-bottom: 0.1rem;">提交申请成功</p>
                </div>
            </div>
            <div class="aduit1">
                <p>教师审核中</p>
                <span style="margin-right:.1rem">项目ID：23421</span>
                <span style="margin-right:.1rem">负责人：刘飞</span>
                <span style="margin-right:.1rem">生效时间：2016年12月12日-2017年12月12日</span>
            </div>
            <el-steps :active="2" align-center style="width:100%">
                <el-step title="创建申请" description="xxxx   时间"></el-step>
                <el-step title="管理审核" description="刘飞"></el-step>
                <el-step title="专家复审" ></el-step>
                <el-step title="完成" ></el-step>
            </el-steps>
            <div>
                <el-button type="primary" size="mini" plain @click="jump('/education/personalcenter/usercenter')">返回</el-button>
                <!-- <el-button type="primary" size="mini" plain>查看申请信息</el-button> -->
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import $ from 'jquery'
import { jump }  from '../../../../untils/auth.js'
export default {
    name:'audit',
    data() {
        return {

        }
    },
    methods:{
        jump,
    }
}
</script>

<style lang="stylus" scoped>
 #success {
    color #00b087
}
.audit {
    height 4rem
    display flex
    flex-direction column
    justify-content space-around
    align-items center
}
.aduit1 {
    p {
        font-weight 700
        margin-bottom .1rem
    }
    span {
        color #999999
    }
}
.audit>>>.el-step__title.is-finish  {
    color #00b087
}
.audit>>> .el-step__description.is-finish {
    color #00b087
}
.audit>>> .el-step__head.is-finish {
    color #00b087
}

</style>