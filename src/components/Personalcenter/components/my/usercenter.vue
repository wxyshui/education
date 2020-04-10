<template>
  <div>
    <div class="my">
      <div class="my_left">
        <!-- <img src="../../../../assets/images/teacher.jpg" alt /> -->
        <el-avatar size="large" :src="photo" class="img" shape="square"></el-avatar>
        <span class="name">admin</span>

        <el-button
          type="text"
          class="set"
          @click="jump('/education/personalcenter/securityset')"
        >安全设置</el-button>
        <el-button type="text" @click="jump('/education/personalcenter/userinfo')">我的信息</el-button>
        <div class="member">vip</div>
      </div>
      <div class="my_right">
        <div class="my_button">
          <el-button type="text" @click="jump('/education/personalcenter/balance')">我的余额</el-button>
          <div class="num">100</div>
        </div>
        <div class="my_button">
          <el-button type="text" @click="jump('/education/personalcenter/integral')">我的积分</el-button>
          <div class="num">100</div>
        </div>
        <div class="my_button">
          <el-button type="text" @click="jump('/education/personalcenter/attention')">我的关注</el-button>
          <div class="num">100</div>
        </div>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="indent">
      <!-- 订单的头部 -->
      <div class="indent_top">
        <span>我的订单</span>
        <el-button
          type="text"
          class="examine"
          @click="jump('/education/personalcenter/myindent')"
        >查看全部</el-button>
      </div>
      <!-- 订单详情 -->
      <div class="indent_bottom">
        <div class="detail">
          <div class="commodity">
            <img src="../../../../assets/images/book.png" alt />
            <div class="commodity_type">
              <div>基础进阶</div>
              <div>数量：1</div>
            </div>
          </div>
          <div class="paymentStatus">待付款</div>
          <div class="price">在线支付</div>
          <div class="operation">
            <el-button type="primary" size="mini" class="button_pay">立即付款</el-button>
            <el-button type="text" size="small">查看详情</el-button>
            <el-button type="text" size="small" @click="centerDialogVisible = true">取消订单</el-button>
            <el-dialog title="取消订单" :visible.sync="centerDialogVisible" width="35%" center>
              <div>取消订单后，本单享有的优惠可能会一并取消，是否继续？</div>
              <div class="reason">请选择取消订单的原因（必选）：</div>
              
              <el-radio-group v-model="radio1" class="reasons" size="small">
                <el-radio-button :label="item.content" v-for="item in reasons" :key="item.id"  class="radio"></el-radio-button>
              </el-radio-group>
             
              <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false" type="info" plain size="medium">再想想</el-button>
                <el-button type="danger" @click="centerDialogVisible = false" size="medium">提交</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
        <div class="detail" style="margin-top:.1rem">
          <div class="commodity">
            <img src="../../../../assets/images/book.png" alt />
            <div class="commodity_type">
              <div>铁道交通100讲</div>
              <div>数量：1</div>
            </div>
          </div>
          <div class="paymentStatus">已完成</div>
          <div class="price">在线支付</div>
          <div class="operation">
            <el-button type="text" size="small">查看详情</el-button>
            <el-button type="text" size="small" class="check">点击下载</el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 收藏的课件 -->
    <div class="courseware">
      <!-- 头   -->
      <div class="courseware_top">
        <span>收藏的课件</span>
        <el-button
          type="text"
          class="examine"
          @click="jump('/education/personalcenter/collect')"
        >查看全部</el-button>
      </div>
      <!-- 详情 -->
      <div class="courseware_bottom">
        <div class="recom-box" v-for="item of list" :key="item.id">
          <div class="file-img">
            <img :src="item.coursewareImg" alt />
          </div>
          <div class="file-info">
            <p>{{item.title}}</p>
            <p>{{item.info}}</p>
            <div class="info-price">
              <div style="color:red">
                ¥
                <span>{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 收藏的文档 -->
    <div class="courseware">
      <!-- 头   -->
      <div class="courseware_top">
        <span>收藏的文档</span>
        <el-button
          type="text"
          class="examine"
          @click="jump('/education/personalcenter/collect')"
        >查看全部</el-button>
      </div>
      <!-- 详情 -->
      <div class="courseware_bottom">
        <div class="recom-box" v-for="item of lists" :key="item.id">
          <div class="file-img">
            <img :src="item.coursewareImg" alt />
          </div>
          <div class="file-info">
            <p>{{item.title}}</p>
            <p>{{item.info}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { jump } from "../../../../untils/auth.js";
export default {
  name: "usercengter",
  data() {
    return {
      photo:require('../../../../assets/images/author.png'),
      centerDialogVisible: false,
      reasons: [
        {
          id: 1,
          content: "配送信息有误"
        },
        {
          id: 2,
          content: "商品买错了"
        },
        {
          id: 3,
          content: "重复下单/误下单"
        },
        {
          id: 4,
          content: "忘记使用优惠券、优币等"
        },
        {
          id: 5,
          content: "其他渠道价格更低"
        },
        {
          id: 6,
          content: "不想买了"
        }
      ],
      radio1:'',
      list: [
        {
          id: 1,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 2,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 3,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        },
        {
          id: 4,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解",
          price: "20"
        }
      ],
      lists: [
        {
          id: 1,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解"
        },
        {
          id: 2,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解"
        },
        {
          id: 3,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解"
        },
        {
          id: 4,
          coursewareImg: require("../../../../assets/images/book.png"),
          title: "基础课件",
          info: "扎实掌握，精尽详解"
        }
      ]
    };
  },
  methods: {
    jump
  }
};
</script>

<style lang="stylus" scoped>
// 我的信息
.my {
  display: flex;

  .my_left {
    border-right: 0.001rem solid #e4e4e4;
    width: 3rem;
  }

  background-color: #f9f9f9;
  border: 0.001rem solid #ccc;
  padding: 0.3rem;

  .img {
   
    vertical-align: middle;
  }

  .name {
    margin-left: 0.1rem;
    vertical-align middle
  }

  .set {
    margin-left: 0.2rem;
  }

  .message {
    margin-left: 0.1rem;
  }

  .member {
    margin-top .1rem
    background-color: #00b087;
    color #fff
    width: 0.4rem;
    height: 0.2rem;
    border-radius: 50%;
    text-align: center;
    line-height: 0.2rem;
  }

  .my_right {
    flex 1
    display flex
    justify-content space-around

    .my_button {
      // margin-left: 1rem;
      text-align: center;

      .num {
        color: red;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
}

// 订单详情
.indent {
  border: 0.01rem solid #e4e4e4;
  margin-top .1rem

  .indent_top {
    height: 0.4rem;  
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #e4e4e4;
    background-color: #f9f9f9;

    .examine {
      float right
      margin-right .2rem
    }

    span {
      margin-left: 0.2rem;
      font-size: 0.14rem;
    }
  }

  .indent_bottom {
    background-color: #fff;
    padding: 0.2rem;
  }

  .detail {
    display: flex;
    border: 0.01rem solid #e4e4e4;
  }

  .commodity {
    display: flex;
    width: 6rem;
    border-right: 0.01rem solid #ededed;
    padding: 0.15rem;

    img {
      width: 0.6rem;
      height: 0.8rem;
      margin-right: 0.1rem;
    }

    .commodity_type {
      line-height: 1.5;
      padding: 0.2rem;
      font-size: 0.08rem;
    }
  }

  .paymentStatus {
    border-right: 0.01rem solid #ededed;
    line-height: 9;
    width: 3rem;
    text-align: center;
    font-size: 0.08rem;
  }

  .price {
    width: 3rem;
    font-size: 0.08rem;
    border-right: 0.01rem solid #ededed;
    text-align: center;
    line-height: 9;

    
  }

  .operation {
    width: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .button_pay {
      margin-top: 0.1rem;
      width: 1rem;
      margin-left: 0.1rem;
    }
  }

  .check {
    margin-left: -0.005rem;
  }
}

// 收藏的课件
.courseware {
  border: 0.01rem solid #e4e4e4;
  margin-top: 0.1rem;

  .courseware_top {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #e4e4e4;
    background-color: #f9f9f9;

    .examine {
      float: right;
      margin-right: 0.2rem;
    }

    span {
      margin-left: 0.2rem;
      font-size: 0.14rem;
    }
  }

  .courseware_bottom {
    margin-left .9rem
    
    display flex
    background-color: #ffffff
    justify-content space-around
    padding: 0.2rem;
    font-size .12rem

    .recom-box {
      // width 25%
      box-sizing border-box
      // margin-left 0.2rem;

      border 0.01rem solid #e4e4e4;
      cursor pointer;
      background-color #f7f8f9
    }

    .file-img {
      text-align: center;
      padding: 0.1rem;

      img {
        width: 0.6rem;
        height: 0.8rem;
      }
    }

    .file-info {
      line-height: 1.5;
      padding: 0.2rem;
      padding-top: 0;
      // box-sizing: border-box;
      text-align: center;
    }

    .info-price {
      display: flex;
      justify-content: center;
    }
  }
}

.reason {
  color: #999999;
  line-height: 0.28rem
}
.reasons {
  display flex
  flex-wrap wrap

  .radio {
    width 50%
    margin-top .1rem
    text-align center
  }
}

.reasons >>>  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  color: red;
  background-color: #fff;
  border-color: red;
  -webkit-box-shadow: -1px 0 0 0  red;
  box-shadow: 0 red
}
.reasons >>> .el-radio-button:first-child .el-radio-button__inner {
  border-radius: 0;
}
.reasons >>> .el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0;
}
.reasons >>> .el-radio-button__inner {
    border-color #DCDFE6
    -webkit-box-shadow -1px 0 0 0  #DCDFE6;
  } 
.reasons >>> .el-radio-button--small .el-radio-button__inner {
  width: 2rem;
}
</style>