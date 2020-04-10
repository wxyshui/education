<template>
  <div>
      <el-tabs type="border-card">
        <el-tab-pane label="我关注的教师">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    align="center"
                    prop="teacher"
                    label="老师"
                    >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="type"
                    label="课程"
                    >
                </el-table-column>
            </el-table>
            <!-- 分页器 -->
            <sorter :totalCount=totalCount></sorter>
        </el-tab-pane>
        
    </el-tabs>
  </div>
</template>

<script>
import Sorter from '../../../ivew/pagination'
export default {
    name:'attention',
    components: {
        Sorter
    },
    data() {
        return {
            tableData:[
                {
                    type:'铁道交通培训',
                    teacher:'丁明老师'
                },
                {
                    type:'铁道交通培训',
                    teacher:'丁明老师'
                },
                {
                    type:'铁道交通培训',
                    teacher:'丁明老师'
                },
                {
                    type:'铁道交通培训',
                    teacher:'丁明老师'
                },
                {
                    type:'铁道交通培训',
                    teacher:'丁明老师'
                },
            ],
            totalCount:100
        }
    }
}
</script>

<style>

</style>