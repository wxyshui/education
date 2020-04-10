<!--
 * @Author: lixiaodi
 * @Date: 2020-03-12 14:40:29
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-12 16:48:26
 -->
<template>
    <el-row :gutter="20" type="flex" class="header-content">
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <img class="header-logo" src="./../../../assets/images/logo.png" alt="logo">
            </div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple flex-box">
               
                <!-- 登录后 -->
                <ul class="header-nav" v-if="LoginStatus">
                    <li class="header-nav-li"><span @click="jump('/education/personalcenter/shopindex')">购物车</span></li>
                    <li class="header-nav-li">
                        <el-dropdown size="mini">
                            <span class="el-dropdown-link">
                                Admin<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item  @click.native="jump('/education/personalcenter/apply')">申请成为教师</el-dropdown-item>
                                <el-dropdown-item   @click.native="jump()">课件上传</el-dropdown-item>
                                <el-dropdown-item   @click.native="jump('/education/personalcenter/integral')">积分</el-dropdown-item>
                                <el-dropdown-item   @click.native="jump('/education/personalcenter/myindent')">消费记录</el-dropdown-item>
                                <el-dropdown-item   @click.native="jump('/education/personalcenter/collect')">我的收藏</el-dropdown-item>
                                <el-dropdown-item   @click.native="jump('/education/personalcenter/message')">未读消息</el-dropdown-item>
                                <el-dropdown-item   @click.native="jump()">未支付订单</el-dropdown-item>
                                <el-dropdown-item   @click.native="jump('/education/personalcenter/usercenter')">管理</el-dropdown-item>
                                <el-dropdown-item   @click.native="onlogout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li class="header-nav-li"><span >APP端</span></li>
                    <li class="header-nav-li"><span>知识服务平台</span></li>
                </ul>
                 <!-- 登录前 -->
                <ul class="header-nav" v-else>
                    <li 
                        class="header-nav-li" v-for="(item,index) of headerNavList" :key="index" @click="jump(item.path)"
                    >
                        {{item.nav}}
                    </li>
                </ul>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { jump, getUser, removeUser} from "../../../untils/auth.js";
export default {
    name: 'EducationIndex',
    data() {
        return {
            headerNavList: [
                {
                    nav:'购物车',
                    path:'/education/personalcenter/shopindex'
                },
                {
                    nav:'登录',
                    path:'/login'
                },
                {
                    nav:'注册',
                    path:'/login/register'
                },
                {
                    nav:'App端',
                    path:''
                },
                {
                    nav:'知识服务平台',
                    path:''
                },
            ],
            active: '',
            LoginStatus:''
        }
    },
    methods: { 
        jump,
        onlogout () {
            this.$confirm('确认退出吗', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            })
            .then(() => {
            // 删除token
                removeUser()
                // 跳转页面
                this.$router.push('/education')
                this.LoginStatus = false
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                })
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出'
                })
            })
        },
    },
    created() {
        if (!getUser()) {
            this.LoginStatus = false;
        } else {
            this.LoginStatus = true;
        }
    },
}
</script>
<style lang="stylus" scoped>
.header-content{
    align-items center
}
.header-logo{
    height .6rem
}
.flex-box{
    display flex
    flex-direction row
    justify-content flex-end
}
/* 导航 */
.header-nav{
    display flex
    flex-flow row nowrap
    justify-content space-between
}
.header-nav-li{
    margin-left .2rem
    cursor pointer
}
.header-nav-li:hover{
    color: #00b087
}

.el-dropdown-link {
    cursor: pointer;
    color: #00b087;
}

.el-dropdown-menu__item:focus, .el-dropdown-menu__item:hover {
    background-color #fff
    color #00b087
}
</style>