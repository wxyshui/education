<!--
 * @Author: lixiaodi
 * @Date: 2020-03-22 14:59:40
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-22 15:22:25
 -->
<template>
  <div>
      
    <el-row :gutter="20">
        <el-col :span="15">
            <div class="grid-content">
                <div class="hot">
                    <span class="hot_1">热门评价</span>
                    <el-checkbox v-model="checked" class="hot_2" size="mini">只显示带图评价</el-checkbox>
                </div>
                <el-card 
                class="cards" 
                v-for="(item,index) in evaluationList"
                :key="item.id"
                :body-style="{ padding: '.3rem', display: 'flex'}"
                >   
                    <div>
                        <img :src='item.userphoto' alt="">
                    </div>
                     
                    <div class="item-right">
                        <div class="name"> {{item.username}}</div>
                        <div class="adress">普通用户/ 深圳</div>
                        <p @click="goEvaluateDetails"> {{item.content}} </p>
                        <div  class="imgs">
                            <img :src='item.img' alt="" v-for="item in item.images" :key=item.id>
                        </div>
                        <div class="wire"></div>
                        <div class="time">
                            <span>{{item.time}}</span>
                            <div>
                                <span class="praise" @click="onlike(item,index)"  :class="{red:i===item.praiseState}">点赞 {{item.praiseNum}}</span><span>回复{{item.reply}}</span>
                            </div>
                        </div>
                        <div class="service">
                            <img src="" alt="">
                            <div class="name">客服</div>
                            <p >发货生死两茫茫，订单多，自难忘。下单千页，无处话凄凉。纵使相逢不相识，尘满面，鬓如霜。夜来幽梦在打包。订单量，正在涨。相顾无言，惟有泪千行。料得配货累断肠，明月夜，仓库忙。</p>
                        </div>
                        <div class="reply">
                            <el-button  type="info" class="big" plain>登录后可发表回复</el-button>
                            <el-button >回复</el-button>
                        </div>
                    </div>
                </el-card>
                <el-card class="more">
                    <el-button type="text">加载更多</el-button>
                </el-card>
            </div>
        </el-col>
        <el-col :span="9">
            <div class="bg-purple">
                <div class="newest">最新评价</div>
                <el-card class="card" v-for="item in newestEvaluationList" :key='item.id'>
                    <div class="name">{{item.username}}</div>
                    <p @click="goEvaluateDetails">{{item.content}}</p>
                    <div class="time">
                        <span>{{item.time}}</span>
                        <div>
                            <span class="praise">点赞  {{item.praiseNum}}</span>
                            <span>回复  {{item.reply}}</span>
                        </div>
                    </div>

                </el-card>
            </div>
        </el-col>
    </el-row>
     
  </div>
</template>

<script>
export default {
  name: 'EvaluateList',
    data () {
      return {
          checked:false,
          i:0,
          evaluationList:[ //评价
            {
                id:1,
                username:"zhangsan",
                time:'12分钟前',
                praiseNum:"1000",
                praiseState:1,
                reply:"100",
                userphoto:require('./../../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images :[
                    {
                        id:1,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                ]
            },
             {
                id:2,
                username:"zhangsan",
                time:'12分钟前',
                praiseNum:"1000",
                praiseState:1,
                reply:"100",
                userphoto:require('./../../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images: [
                    {
                        id:1,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                ]
            },
             {
                id:3,
                username:"zhangsan",
                time:'12分钟前',
                praiseNum:"1000",
                praiseState:1,
                reply:"100",
                userphoto:require('./../../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images :[
                    {
                        id:1,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                ]
            },
             {
                id:4,
                username:"zhangsan",
                time:'12分钟前',
                praiseNum:"1000",
                praiseState:1,
                reply:"100",
                userphoto:require('./../../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images :[
                    {
                        id:1,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                ]
            },
             {
                id:5,
                username:"zhangsan",
                time:'12分钟前',
                praiseNum:"1000",
                praiseState:1,
                reply:"100",
                userphoto:require('./../../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images: [
                    {
                        id:1,
                        img: require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img: require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('./../../../../../assets/images/teacher.jpg')
                    },
                ]
            },
          ],
          newestEvaluationList:[  //最新评价
            {id:1, username:"张三", content:"拿到就迫不及待的试了一下，稍微有点宽松，但是这样穿很舒服。颜色也很好看，大爱。这种轻羽绒很适合广州的天气 ……", time:'12分钟前',praiseNum:"1000", reply:"100"},
            {id:2, username:"李四", content:"拿到就迫不及待的试了一下，稍微有点宽松，但是这样穿很舒服。颜色也很好看，大爱。这种轻羽绒很适合广州的天气 ……", time:'12分钟前',praiseNum:"1000", reply:"100"},
            {id:3, username:"王五", content:"拿到就迫不及待的试了一下，稍微有点宽松，但是这样穿很舒服。颜色也很好看，大爱。这种轻羽绒很适合广州的天气 ……", time:'12分钟前',praiseNum:"1000", reply:"100"}
          ]
        }
    },
    methods :{
        goEvaluateDetails() {
            this.$router.push({path: 'evaluaeDetails'})
        },
        onlike (e,a) {
          
            console.log(e,a);
            if(e.praiseState === 1) {
                this.evaluationList[a].praiseState = 0
                this.evaluationList[a].praiseNum = Number(this.evaluationList[a].praiseNum)+1
            }else {
                this.evaluationList[a].praiseState = 1
                this.evaluationList[a].praiseNum = Number(this.evaluationList[a].praiseNum)-1
                
            }
            
        }
    }
}

</script>
<style lang="stylus" scoped>
.red {
    color red
}
.grid-content {
    .hot {
        .hot_1 {
            font-size .14rem
            color #222
        }
        .hot_2 {
            float right
            font-size .1rem
            color #333
            vertical-align middle
            >>> .el-checkbox__label {
                line-height .14rem
            }
        }
        
    }
    .cards {
        margin-top .1rem
        cursor pointer
        
        .item-right {
            margin-left .3rem
            .name {
                color #333
                font-size .14rem
                margin-bottom .1rem
            }
            .adress {
                color #999
                font-size 0.1rem
                margin-bottom .2rem
            }
            p {
                color #333
                font-size 0.12rem
                margin-bottom .3rem
                line-height .25rem
                
            }
            .imgs {
                // display flex
                // flex-wrap wrap
                img {
                    width 1.2rem
                    height .8rem
                    margin-bottom .2rem
                    margin-right .2rem
                    
                }
            }
            .wire {
                width 100%
                border solid 0.01rem #ccc
                margin-bottom .1rem
            }
            .time {
                color #666
                margin-top .1rem
                margin-bottom .1rem
                display flex
                justify-content space-between
                .praise {
                    margin-right .2rem
                }
            }
            .reply {
                display flex
                .big {
                    flex 1
                }

            }
        }
    }
    .more {
        margin-top .1rem
        text-align center
        el-button {
            font-size .3rem
            color red
        }
        
    }
}
.bg-purple {
    .newest {
        font-size .14rem
        color #222 
    }
    .card {
        margin-top .1rem
        cursor pointer
        .name {
            color #333
            font-size .14rem
            margin-bottom .1rem 
        }
        p {
            color #333
            font-size .12rem
            margin-bottom .2rem
            line-height .25rem 
            cursor pointer

        }
        .time {
            color #666
            display flex
            justify-content space-between
            .praise {
                margin-right .1rem
            }
        }
    }
}
 
</style>