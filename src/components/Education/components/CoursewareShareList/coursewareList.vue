<!--
 * @Author: lixiaodi
 * @Date: 2020-03-16 14:37:20
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-18 09:37:30
 -->
<template>
    <div>
        <!-- 内容 -->
        <el-row :gutter="20" v-for="(row,index) of rows" :key="index">
            <el-col :span="6" v-for="item of row" :key="item.id">
                <div class="grid-content bg-purple">
                    <div class="courseware-img">
                        <img :src="item.coursewareImg" alt="">
                    </div>
                    <div class="courseware-info">
                        <p>{{item.title}}</p>
                        <p>{{item.info}}</p>
                        <div class="info-price">
                            <div>¥ <span>{{item.price}}</span></div>
                            <div>购物车</div>
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
    name: 'CoursewareList',
    components: {
        Pagination
    },
    data() {
        return {
            coursewareList: [
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
    // 拆分课件
    computed: {
        rows (){
            // 存放分行以后的课件
            const rows = []
            // 遍历课件数据
            this.coursewareList.forEach((item,index)=>{
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
.courseware-img{
    text-align: center;
    background: #f2f3f4;
    padding: .3rem;
}
.courseware-info{
    background: #fdffff;
    line-height: 2;
    padding: .1rem;
    box-sizing: border-box;
}
.info-price{
    display: flex;
    justify-content: space-between;
}
</style>