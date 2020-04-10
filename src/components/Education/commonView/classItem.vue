<!--
 * @Author: lixiaodi
 * @Date: 2020-03-13 14:36:11
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-13 14:52:27
 -->
<template>
    <div class="class-list-box">
        <div class="class-title">分类</div>
        <div class="class-list">
            <ul class="class-list-item" v-for="(item,index) of classList" :key="index">
                <li v-for="(content,idx) of item" :key="idx">{{content}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClassItem',
    components:{},
    data() {
        return {
            classList: [
                ['xxx','xxx','xxx'],
                ['xxx','xxx','xxx'],
                ['xxx','xxx','xxx'],
                ['xxx','xxx','xxx']
            ]
        }
    },
}
</script>
<style lang="stylus" scoped>
.class-list-box{
    padding .1rem
}
.class-title{
    font-weight 700
    line-height 2
    margin-bottom .1rem
}
.class-list-item{
    display flex
    flex-flow row nowrap
    justify-content space-between
    align-items center
    line-height 2
}
</style>