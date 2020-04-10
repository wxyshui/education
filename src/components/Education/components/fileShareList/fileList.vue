<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 16:39:54
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 09:37:44
 -->
<template>
    <div>
        <!-- 内容 -->
        <el-row :gutter="20" v-for="(row,index) of rows" :key="index">
            <el-col :span="6" v-for="item of row" :key="item.id">
                <div class="grid-content bg-purple">
                    <div class="file-img">
                        <img :src="item.coursewareImg" alt="">
                    </div>
                    <div class="file-info">
                        <p>{{item.title}}</p>
                        <p>{{item.info}}</p>
                        <div class="info-price">
                            <div>¥ <span>{{item.price}}</span></div>
                        </div>
                        <div>
                            <el-button size="mini">查看文档</el-button>
                            <el-button size="mini">收藏文档</el-button>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 分页 -->
        <pagination></pagination>
    </div>
</template>

<script>
import Pagination from './../../commonView/Pagination'
export default {
    name: 'FileList',
    components: {
        Pagination
    },
    data() {
        return {
            fileList: [
                {id: 1, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 2, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 3, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 4, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 5, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 6, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 7, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 8, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 9, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'},
                {id: 10, coursewareImg: require('./../../../../assets/images/book.png'), title: '基础培训', info: '十年铁路，一朝汇总', price: '99'}
            ]
        }
    },
    // 拆分文档
    computed: {
        rows (){
            // 存放分行以后的课件
            const rows = []
            // 遍历课件数据
            this.fileList.forEach((item,index)=>{
                // 分行
                const row = Math.floor(index/4)
                // 如果没有行，添加行，如果有，给行添加数据
                if(!rows[row]){
                    rows[row] = []
                    rows[row].push(item)
                }else{
                    rows[row].push(item)
                }
            })
            
            return rows
        }
    }
}
</script>
<style lang="stylus" scoped>
.el-row {
    margin-bottom: .1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
.file-img{
    text-align: center;
    background: #f2f3f4;
    padding: .3rem;
}
.file-info{
    background: #fdffff;
    line-height: 2;
    padding: .1rem;
    box-sizing: border-box;
    text-align: center;
}
.info-price{
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
}
</style>