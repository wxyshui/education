<!--
 * @Author: lixiaodi
 * @Date: 2020-03-18 09:29:35
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 10:07:33
 -->
<template>
   <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        style="text-align: center;margin: .1rem 0;">
    </el-pagination>
</template>

<script>
export default {
    name: 'Pagination',
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper{}
</style>