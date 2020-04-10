<template>
  <div>
        <el-tabs type="border-card">
            
            <el-tab-pane label="已上传资料">
                <div>
                    <el-button size='mini' type="info" plain>全部</el-button>
                    <el-button size='mini' type="info" plain>免费</el-button>
                    <el-button size='mini' type="info" plain>收费</el-button>
                </div>
                <div style="margin-top:.1rem">
                    <el-button size='mini' type="info" plain>全部</el-button>
                    <el-button size='mini' type="info" plain>已授权平台</el-button>
                    <el-button size='mini' type="info" plain>未授权平台</el-button>
                </div>
                <hr  style="background: #333;height: 1px;border: none;"/>
                 <div>
                    <el-button size='mini' type="info" plain>查看</el-button>
                    <el-button size='mini' type="info" plain>编辑</el-button>
                    <el-button size='mini' type="info" plain>发布</el-button>
                    <el-button size='mini' type="info" plain>导出</el-button>
                    <el-button size='mini' type="info" plain>上传</el-button>
                    <el-form :inline="true" :model="dataForm" class="demo-form-inline" size="mini" ref="dataForm">
                        <el-form-item prop="user" >
                            <el-input v-model="dataForm.user" placeholder="请输入关键字"></el-input>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-button @click="resetForm('dataForm')" type="primary" plain>重置</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" plain>查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div>
                    <el-table
                        ref="multipleTable"
                        :data="tableDatas"
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
                        prop="resource"
                        label="资源名称"
                        >
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="antistop"
                        label="关键词"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="content"
                        label="内容简介"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="type"
                        label="资源类型"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="subject"
                        label="学科分类"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="knowledgehierarchy"
                        label="知识体系分类"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="author"
                        label="作者信息"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="organization"
                        label="作者所属机构"
                        >
                        </el-table-column> 
                        <el-table-column
                        align="center"
                        prop="pricing"
                        label="订价"
                        >
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="accredit"
                        label="是否授权平台"
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

            <el-tab-pane label="已发布资源">
                <div>
                    <el-button size='mini' type="info" plain>全部</el-button>
                    <el-button size='mini' type="info" plain>免费</el-button>
                    <el-button size='mini' type="info" plain>收费</el-button>
                </div>
                <hr  style="background: #333;height: 1px;border: none;"/>
                <div>
                    <el-button size='mini' type="info" plain>查看</el-button>
                    <el-button size='mini' type="info" plain>编辑</el-button>
                    <el-button size='mini' type="info" plain>下架</el-button>
                    <el-form :inline="true" :model="ruleForm" class="demo-form-inline" size="mini" ref="ruleForm">
                        <el-form-item prop="user">
                            <el-input v-model="ruleForm.user" placeholder="请输入关键字"></el-input>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-button @click="resetForm('ruleForm')" type="primary" plain>重置</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" plain>查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
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
                        prop="resource"
                        label="资源名称"
                        >
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="antistop"
                        label="关键词"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="content"
                        label="内容简介"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="type"
                        label="资源类型"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="subject"
                        label="学科分类"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="knowledgehierarchy"
                        label="知识体系分类"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="author"
                        label="作者信息"
                        >
                        </el-table-column>
                         <el-table-column
                        align="center"
                        prop="organization"
                        label="作者所属机构"
                        >
                        </el-table-column> 
                        <el-table-column
                        align="center"
                        prop="Resourceincome"
                        label="资源收益"
                        >
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="Browsenumber"
                        label="浏览数量"
                        >
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="Downloadnumber"
                        label="下载数量"
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
    name:'myprofile',
    data() {
        return {
            totalCount:1000,
            ruleForm:{
                user:''
            },
            dataForm:{
                user:''
            },
            tableData:[
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                    
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                },
                {
                  
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    Resourceincome:298452,
                    Browsenumber:22610,
                    Downloadnumber:1599
                }
            ],
            tableDatas:[
                 {
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    pricing:188,
                    accredit:'是',
                },
                {
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    pricing:188,
                    accredit:'是',
                },
                {
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    pricing:188,
                    accredit:'是',
                },
                {
                    resource:'铁道基础进阶知识',
                    antistop:'xxxxxx',
                    content:'这是一份基础教学资料',
                    type:'课件',
                    subject:'基础知识',
                    knowledgehierarchy:'知识体系分类',
                    author:'刘图',
                    organization:'W3cschool',
                    pricing:188,
                    accredit:'是',
                },
            ]
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
.demo-form-inline {
    float right 
}
.sorter {
text-align center
margin-top .1rem
}
</style>