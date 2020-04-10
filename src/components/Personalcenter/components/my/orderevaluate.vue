<template>
 
   <div>
    <el-card  v-for="(item,index) in evaluationList" :key="item.id" class="cards">
      <el-row :gutter="20">
        <el-col :span="16" style="display:flex" class="evaluate">
          <div>
            <img :src="item.userphoto" alt />
          </div>
            
          <div class="item-right">
            <div class="name">{{item.username}}</div>
            <div class="adress">学生/ 深圳</div>
            <p @click="goEvaluateDetails">{{item.content}}</p>
            <div class="imgs">
              <img :src="item.img" alt v-for="item in item.images" :key="item.id" />
            </div>
            <div class="wire"></div>
            <div class="time">
              <span>{{item.time}}</span>
              <div>
                <span
                  class="praise"
                  @click="onlike(item,index)"
                  :class="{red:i===item.praiseState}"
                >点赞 {{item.praiseNum}}</span>
                <span>回复{{item.reply}}</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="courseware">
            <img src="../../../../assets/images/echarKno.jpg" alt="">
            <el-button size="medium " type="text" class="basics">基础铁道课件</el-button>
        </el-col>
      </el-row>
      
    </el-card>
    <el-pagination
        background
        layout="prev, pager, next"
        :total=totalCount
        class="sorter">
    </el-pagination>
   </div>
 
</template>

<script>
export default {
  name: "orderevaluate",
  data() {
    return {
        i:0,
        totalCount:100,
       evaluationList:[ //评价
            {
                id:1,
                username:"zhangsan",
                time:'12分钟前',
                praiseNum:"1000",
                praiseState:1,
                reply:"100",
                userphoto:require('../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images:[
                    {
                        id:1,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('../../../../assets/images/teacher.jpg')
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
                userphoto:require('../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images:[
                    {
                        id:1,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('../../../../assets/images/teacher.jpg')
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
                userphoto:require('../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images:[
                    {
                        id:1,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('../../../../assets/images/teacher.jpg')
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
                userphoto:require('../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images:[
                    {
                        id:1,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('../../../../assets/images/teacher.jpg')
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
                userphoto:require('../../../../assets/images/home.png'),
                content:"这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
                images:[
                    {
                        id:1,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:2,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:3,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:4,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:5,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:6,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:7,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                    {
                        id:8,
                        img:require('../../../../assets/images/teacher.jpg')
                    },
                ]
            },
        ]
    };
  },
  methods :{
        goEvaluateDetails() {
            this.$router.push({path: '/Education/evaluaeDetails'})
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
};
</script>

<style lang="stylus" scoped>
.cards {
    margin-bottom .1rem
}
.red {
    color red
}
.evaluate {
    margin-top .1rem
    cursor pointer
    .item-right {
        margin-left .2rem
        .name {
            color #333
            margin-bottom .1rem
        }
        .adress {
            color #999
            font-size 0.1rem
            margin-bottom .2rem
        }
        p {
            color #999
            font-size .12rem
            margin-bottom .1rem
            line-height .25rem
            
        }
        .imgs {

            img {
                width .5rem
                height .5rem
                margin-bottom .2rem
                margin-right .15rem
            }
        }
        .wire {
            width 100%
            border solid 0.005rem #ccc
            margin-bottom .2rem
        }
        .time {
            margin-top .1rem
            margin-bottom .1rem
            display flex
            justify-content space-between
            font-size 0.08rem
            .praise {
                margin-right .2rem
            }
        }
        .reply {
            display flex
            font-size .08rem
            .big {
                flex 1
            }

        }
    }
}
 
.courseware {
    text-align center
    img {
        width 2.8rem
        margin-top .4rem
        margin-bottom 0.2rem
    }
    .basics {
        display block
        font-size .2rem
        margin-left .9rem
        
    }
}
.sorter {
  text-align center
  margin-top .2rem
}
</style>