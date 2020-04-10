<template>
    <el-pagination
        background
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total=totalCount
        class="sorter">
    </el-pagination>
</template>

<script>
export default {
 name:'pagination',
 props:{
    totalCount:Number
 }
}
</script>

<style lang="stylus" scoped>
.sorter {
  text-align center
  margin-top .2rem
}
</style>