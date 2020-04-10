<!--
 * @Author: lixiaodi
 * @Date: 2020-03-17 09:53:18
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 14:04:55
 -->
<template>
    <!-- 标题 -->
    <div class="share-title">
        <p class="title-sty">{{title}}</p>
        <p class="title-more" @click="gotoMore">更多资源 >></p>
    </div>
</template>

<script>
export default {
  name: 'modelTitle',
  props: ['content'],
  data() {
      return {
          title: this.content
      }
  },
  methods: {
        // 跳转至更多
        gotoMore (){
            // 根据标题判断跳转
            let jumpPath = ''
            switch (this.content){
                case '课件分享': 
                    jumpPath = 'coursewareList'
                    break
                case '文档文献分享':
                    // 判断收费还是免费
                    // 地址赋值
                    jumpPath = 'fileList'
                    break
                case '最新公告':
                    jumpPath = 'noticeList'
                    break
                case '最新资讯':
                    jumpPath = 'newsList'
                    break
                case '精品课件':
                    jumpPath = 'coursewareList'
                    break
                case '课件资源':
                    jumpPath = 'coursewareList'
                    break
                default:
                    jumpPath = 'index'
            }
            this.$router.push({path: jumpPath})
        }
    }
}
</script>
<style lang="stylus" scoped>
/* 标题 */
.share-title{
    display flex
    justify-content space-between
    border-left 3px solid #00b087
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
</style>