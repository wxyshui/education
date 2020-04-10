<template>
  <div>
    <!-- 面包屑 -->
    <bread-crumb></bread-crumb>
    <el-row :gutter="20">
      <el-col :span="14">
        <el-card
          class="cards"
          v-for="item in CommentDetails"
          :key="item.id"
          :body-style="{ padding: '.3rem', display: 'flex'}"
        >
          <div>
            <img :src="item.userphoto" alt />
          </div>

          <div class="item-right">
            <div class="name">{{item.username}}</div>
            <div class="adress">
              <span>基层/深圳</span>
              <span>基础精品入门课程</span>
            </div>
            <p>{{item.content}}</p>
            <div class="imgs">
              <img :src="item.img" alt v-for="item in item.images" :key="item.id" />
            </div>
            <div class="wire"></div>
            <div class="time">
              <span>1周前</span>
              <div>
                <span class="praise">点赞{{item.praiseNum}}</span>
                <span>回复{{item.reply}}</span>
              </div>
            </div>

            <div class="reply_button">
              <el-button type="primary" class="big" plain>登录后可发表回复</el-button>
              <el-button type="primary" plain>回复</el-button>
            </div>
            <div class="reply_num">
              评价回复
              <span>100</span>
            </div>
            <div class="reply">
              <el-row :gutter="20" v-for="item in  ReplyDetails" :key="item.id" class="row_reply">
                <el-col :span="2" class="photo">
                  <img :src="item.photo" alt />
                </el-col>
                <el-col :span="22">
                  <div class="guest">
                    <span>{{item.name}}</span>
                    <span>{{item.praiseNum}}</span>
                  </div>
                  <p>{{item.content}}</p>
                </el-col>
              </el-row>
            </div>
            <div class="more">
                <el-button type="primary" plain>加载更多</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card">
            <img src="./../../../../../assets/images/teacher.jpg" alt="">
            <div class="course">xxxx小明老师的课程</div>
            <p>基础入门，自我学习</p>
            <el-button class="detail" @click="goTeacherInfo" type="primary" plain>查看详情</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumb from "../../../commonView/Breadcrumb";
export default {
  name: "ReplyDetails",
  components: {
    BreadCrumb,
  },
  data() {
    return {
      CommentDetails: [
        // 评论详情
        {
          id: 1,
          username: "zhangsan",
          userphoto: require("./../../../../../assets/images/home.png"),
          content:
            "这是一个非常好的课件，课件越来越多地用于课堂教学，课件的恰当应用有助于增强课堂的表现力，激发学生的学习兴趣，提高教学效率。反之则会出现消极的后果……",
          time: "12分钟前",
          praiseNum: "1000",
          reply: "100",
          images: [
            {
              id: 1,
              img: require("../../../../../assets/images/teacher.jpg")
            },
            {
              id: 2,
              img: require("../../../../../assets/images/teacher.jpg")
            },
            {
              id: 3,
              img: require("../../../../../assets/images/teacher.jpg")
            },
            {
              id: 4,
              img: require("../../../../../assets/images/teacher.jpg")
            },
            {
              id: 5,
              img: require("../../../../../assets/images/teacher.jpg")
            },
            {
              id: 6,
              img: require("../../../../../assets/images/teacher.jpg")
            },
            {
              id: 7,
              img: require("../../../../../assets/images/teacher.jpg")
            },
            {
              id: 8,
              img: require("../../../../../assets/images/teacher.jpg")
            }
          ]
        }
      ],
      ReplyDetails: [
        {
          id: 1,
          name: "客服",
          praiseNum: "11",
          content:
            "发货生死两茫茫，订单多，自难忘。下单千页，无处话凄凉。纵使相逢不相识，尘满面，鬓如霜。夜来幽梦在打包。订单量，正在涨。相顾无言，惟有泪千行。料得配货累断肠，明月夜，仓库忙。",
          photo: require("./../../../../../assets/images/shopping.png")
        },
        {
          id: 2,
          name: "炎月",
          praiseNum: "11",
          content: "很轻薄，还没有穿，希望不要让我失望哈！",
          photo: require("./../../../../../assets/images/shopping.png")
        },
        {
          id: 3,
          name: "马旭东",
          praiseNum: "11",
          content: "很轻薄，还没有穿，希望不要让我失望哈！",
          photo: require("./../../../../../assets/images/shopping.png")
        },
        {
          id: 4,
          name: "旋涡鸣人",
          praiseNum: "11",
          content: "很轻薄，还没有穿，希望不要让我失望哈！",
          photo: require("./../../../../../assets/images/shopping.png")
        },
        {
          id: 5,
          name: "小罗",
          praiseNum: "11",
          content: "很轻薄，还没有穿，希望不要让我失望哈！",
          photo: require("./../../../../../assets/images/shopping.png")
        }
      ]
    };
  },
  methods: {
      goTeacherInfo() {
            this.$router.push({path: 'teacherInfo'})

      }
  }
};
</script>

<style lang="stylus" scoped>
.cards {
  margin-top: 0.1rem;

  .item-right {
    margin-left: 0.3rem;

    .name {
      color: #333;
      font-size: 0.14rem;
      margin-bottom: 0.1rem;
    }

    .adress {
      color: #999;
      font-size: 0.1rem;
      margin-bottom: 0.2rem;
      display: flex;
      justify-content: space-between;
    }

    p {
      color: #999;
      font-size: 0.12rem;
      line-height: 0.25rem;
    }

    .imgs {

      img {
        width 1.2rem
        height .8rem
        margin-bottom .2rem
        margin-right .1rem
      }
    }

    .wire {
      width: 100%;
      border: solid 0.01rem #ccc;
      margin-bottom: 0.1rem;
    }

    .time {
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;

      .praise {
        margin-right: 0.2rem;
      }
    }

    .reply_button {
      display: flex;
      margin-bottom: 0.3rem;

      .big {
        flex: 1;
      }
    }

    .reply_num {
      font-size: 0.18rem;
      margin-bottom: 0.3rem;

      span {
        color: red;
      }
    }

    .reply {
      .row_reply {
        padding: 0.2rem;
        border-top: solid 0.0005rem #ccc;

        .guest {
          display: flex;
          justify-content: space-between;
          // margin-bottom: 0.1rem;
          vertical-align middle
          height .28rem
          align-items center
        }
        .photo {
          vertical-align middle
        }
      }

      .row_reply:nth-last-child(1) {
        border-bottom: 0.0005rem solid #ccc;
      }
    }
    .more {
        margin-top .3rem
        margin-bottom .1rem
        width 100%
        text-align center

    }
  }
}
.card {
    margin-top 0.1rem
    text-align center
    img {
        width 3rem
        height 3rem
        margin-top .2rem
    }
    .course {
        font-size .2rem
        font-weight 700
        margin-top .1rem
        margin-bottom .1rem
    }
    p {
        font-size .1rem
        margin-bottom .1rem
    }
    .detail {
        width 3rem
    }
    
   
}
</style>