<template>
  <div class="allcollect">
      <el-tabs type="border-card" >
        <el-tab-pane label="资源收藏">
            <div>
                <el-button type="info" size="mini" plain="">全部收藏</el-button>
                <el-button type="info" size="mini" plain="">课件收藏</el-button>
                <el-button type="info" size="mini" plain="">文档收藏</el-button>
            </div>
            <hr  style="background: #333;height: 1px;border: none;"/>
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
            <div class="collect">
                <div class="collect-box" v-for="item of list" :key="item.id">
                    <div class="collect-top" >
                        <div class="file-img">
                            <img :src="item.collectImg" alt />
                        </div>
                        <div class="file-info">
                            {{item.info}}
                        </div>
                    </div>
                    
                    <el-button-group class="collect-bottom">
                        <el-button type="primary" icon="el-icon-shopping-cart-2" size="small" plain>加入购物车</el-button>
                        <el-button type="primary" size="small" icon="el-icon-star-on" plain>取消收藏</el-button>
                    </el-button-group>  

                </div>
            </div>
            <!-- 分页器 -->
            <sorter :totalCount="totalCount"></sorter>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Sorter from   '../../..//ivew/pagination'
export default {
    name:'collect',
    components:{
        Sorter
    },
    data() {
        return {
            dataForm:{
                user:''
            },
            totalCount:100,
            list:[
                {
                    id:1,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:2,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:3,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:4,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:5,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:6,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:7,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:8,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:9,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },
                {
                    id:10,
                    collectImg:require('../../../../assets/images/book.png'),
                    info:"铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识铁道知识"
                },

            ]
        }
    },
    methods: {
       resetForm(e) {
        this.$refs[e].resetFields()
      },
     
    }
}
</script>
    
<style lang="stylus" scoped>
    .collect {
        display flex
        flex-wrap wrap
    }
    .collect-box {
        width 25%
        padding-left .2rem
    }
    .collect-top {
        background-color #f8f8f8
        width 2.05rem
        height 2rem
        display flex
        flex-direction column
        align-items center
        .file-info {
            width 2rem
            padding-left .1rem
            padding-right .1rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis

        }
        img {
            // height 1.7rem
            margin-top .1rem
            margin-bottom .2rem
        }
    }
    .collect-bottom {
        margin-bottom .1rem
        margin-top 0.1rem
        .el-button--small {
            // padding .07rem .26rem
        }
    }
    
</style>