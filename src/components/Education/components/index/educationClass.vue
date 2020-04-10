<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 14:07:36
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-13 16:32:15
 -->
<template>
    <div class="class-box">
        <!-- 标题 -->
        <div class="share-title">
            <p class="title-sty">{{title}}</p>
            <p class="title-more">更多资源 >></p>
        </div>
        <!-- 内容 -->
        <div class="class-content">
            <el-row :gutter="20">
                <el-col :span="6" class="class-border">
                    <div class="grid-content bg-purple">
                        <class-item></class-item>
                        <class-item></class-item>
                        <class-item></class-item>
                    </div>
                </el-col>
                <el-col :span="6" class="class-border">
                    <div class="grid-content bg-purple">
                        <class-item></class-item>
                        <class-item></class-item>
                        <class-item></class-item>
                    </div>
                </el-col>
                <el-col :span="6" class="class-border">
                    <div class="grid-content bg-purple">
                        <class-item></class-item>
                        <class-item></class-item>
                        <class-item></class-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <class-item></class-item>
                        <class-item></class-item>
                        <class-item></class-item>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import ClassItem from './../../commonView/classItem'
export default {
    name: 'EducationClass',
    components:{
        ClassItem
    },
    data() {
        return {
            title: '分类'
        }
    },
}
</script>
<style lang="stylus" scoped>
/* 标题 */
.share-title{
    display flex
    justify-content space-between
    border-left 2px solid #00b087
    padding-left: 0.1rem;
    margin-bottom .1rem
}
.title-sty{
    font-weight 700
}
.title-more{
    color #46454c
    cursor pointer
}
/* 内容 */
.class-content{
    border-top 1px solid #efefef
    padding .1rem 0
}
.class-border{
    border-right 1px solid #efefef
}
</style>