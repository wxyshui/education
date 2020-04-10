<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 09:26:25
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-16 17:41:41
 -->
<template>
    <div style="margin-bottom: .1rem;">
        <el-row class="select" v-for="item of selectList" :key="item.id">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark select-item">
                    <div class="select-key">{{item.selectKey}}：</div>
                    <ul class="select-value">
                        <li class="select-value-li" v-for="(sel,index) of item.selectVals" :key="index">{{sel}}</li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'TeacherSelect',
    data() {
    return {
        selectList: [
            {
                id: 1,
                selectKey: '分类',
                selectVals: ['全部','培训','教学','教育']
            },
            {
                id: 2,
                selectKey: '难易',
                selectVals: ['全部','初级','初级进阶','中级','中级进阶','高级','高级精通']
            },
            {
                id: 3,
                selectKey: '数量(页)',
                selectVals: ['全部','0-50','50-200','200以上']
            },
            {
                id: 4,
                selectKey: '价格(元)',
                selectVals: ['全部', '免费', '0-100', '100-500', '500以上']
            }
        ]
    }
    },
}
</script>
<style lang="stylus" scoped>
.select{
    background: #feffff;
    line-height: 3;
    border-bottom: 1px dashed #efefef;
    padding: 0 .1rem;
}
    .select-item{
        display flex
        flex-flex-flow row 
        align-items center
    }
        .select-key{
            width .8rem
        }
        .select-value{
            display flex
        }
            .select-value-li{
                margin-right: .2rem
            }
</style>