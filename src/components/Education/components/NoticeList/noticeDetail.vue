<!--
 * @Author: lixiaodi
 * @Date: 2020-03-19 14:27:33
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-19 16:33:23
 -->
<template>
  <div class="article-box">
      <!-- 标题 -->
      <div style="margin-bottom:.2rem">
          <p class="article-title">{{content.title}}</p>
          <div class="article-title2">
              <p class="margin-right">{{content.pubDate}}</p>
              <p class="margin-right">{{content.resource}}</p>
              <p>{{content.author}}</p>
          </div>
      </div>
      <!-- 内容 -->
      <div class="article-content">
          <p>{{content.articleInfo}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeDetail',
  data() {
      return {
            content: {
                title: '加开"高峰线"列车畅通出行路',
                pubDate: '2019-01-01 08:26:20',
                resource: '用户投稿',
                author: '韩庆潇 高冰',
                articleInfo: `加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路
                加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路
                加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路
                加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路
                加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路加开"高峰线"列车畅通出行路。`
            }
      }
  },
}
</script>
<style lang="stylus" scoped>
.article-box{
    padding .5rem
}
/* 标题 */
.article-title{
    ont-weight: 700;
    font-size: .3rem;
    text-align: center;
    line-height: 3;
}
.article-title2{
    display: flex;
    justify-content: center;
    line-height: 2;
    text-align: center;
    font-size: .15rem;
}
.article-content p{
    line-height 2
    text-indent 2em
    padding-top .2rem
}
.margin-right{
    margin-right .2rem
}
</style>