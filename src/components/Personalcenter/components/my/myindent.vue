<template>
  <div>
      <el-tabs type="border-card">
      <el-tab-pane label="我的订单" class="shopcart">
         <div v-for="item in unpaidList" :key="item.id" class="indent-item">
             <div class="order">
                 <span class="order_time">下单时间：{{item.time}}</span>
                 <span class="order_num">订单编号：{{item.orderNum}}</span>
                 <span class="payment_time" v-if="item.paymentStatus === '待付款'">付款截止：剩余{{item.paymentTime}}</span>
                 <el-button type="text" v-else class="button_del" size="small" @click="dele(item)">删除</el-button>
             </div>
             <div class="detail">
                 <div class="commodity">
                    <img :src=item.img alt="">
                    <div class="commodity_type">
                        <div>{{item.commodity}}</div>
                        <div>数量：{{item.commodityNum}}</div>
                    </div>
                 </div>
                 <div class="paymentStatus">{{item.paymentStatus}}</div>
                 <div class="price">
                    <div>￥{{item.price}}</div>
                    <div>在线支付</div>
                 </div>
                 <div class="operation">
                     <el-button type="primary" size="small" class="button_pay" v-if="item.paymentStatus === '待付款'" >立即付款</el-button>
                     <el-button type="text" size="small" @click="jump('/education/teacherInfo')">查看详情</el-button>
                     <el-button type="text" v-if="item.paymentStatus === '待付款'" size="small" @click="centerDialogVisible = true">取消订单</el-button>
                     <el-button type="text" v-else size="small" class="check" @click="jump('/education/teacherInfo')">查看教师</el-button>
                 </div>
             </div>
         </div>
        
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
    
        <el-pagination
          background
          layout="prev, pager, next"
          :total=totalCount
          class="sorter">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { jump } from "../../../../untils/auth.js";
export default {
    name:"myindent",
    data() {
        return {
            totalCount:100,
            centerDialogVisible:false,
            radio1:'',
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
            unpaidList:[
                {
                time:'2018-01-08 15:02:00', 
                orderNum:62205697599,
                paymentTime:"00时33分",
                commodity:'基础进阶',
                commodityNum:1,
                paymentStatus:'待付款',
                price:'50.00',
                id:1,
                img:require('../../../../assets/images/book.png')
                },
                {
                time:'2018-01-08 15:02:00', 
                orderNum:62205697599,
                paymentTime:"00时33分",
                commodity:'基础进阶',
                commodityNum:1,
                paymentStatus:'待付款',
                price:'50.00',
                id:2,
                img:require('../../../../assets/images/book.png')
                },
                 {
                time:'2018-01-08 15:02:00', 
                orderNum:62205697599,
                paymentTime:"00时33分",
                commodity:'基础进阶',
                commodityNum:1,
                paymentStatus:'已完成',
                price:'50.00',
                id:3,
                img:require('../../../../assets/images/book.png')
                },
                 {
                time:'2018-01-08 15:02:00', 
                orderNum:62205697599,
                paymentTime:"00时33分",
                commodity:'基础进阶',
                commodityNum:1,
                paymentStatus:'已完成',
                price:'50.00',
                id:4,
                img:require('../../../../assets/images/book.png')
                },
                 {
                time:'2018-01-08 15:02:00', 
                orderNum:62205697599,
                paymentTime:"00时33分",
                commodity:'基础进阶',
                commodityNum:1,
                paymentStatus:'已取消',
                price:'50.00',
                id:5,
                img:require('../../../../assets/images/book.png')
                },
            ]
        }
    },
    methods:{
        dele() {
            this.$confirm('是否删除该订单?',  {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
        jump
    }
}
</script>

<style lang="stylus" scoped>
.indent-item {
    border .01rem solid #ededed
    margin-bottom .1rem
}
.order {
    height .5rem
    line-height 4
    background-color #f9f9f9
    border-bottom .01rem solid #ededed
    color #22cc33
    font-size .08rem
    padding-left .1rem
    padding-right .1rem
}
.order_time {
    margin-left .1rem
    vertical-align middle
}
.order_num {
    margin-left .2rem
}
.payment_time {
    float right
}
.button_del {
    float right
    color #c2c2c2
    margin-right .1rem
    margin-top .1rem
  }
.detail {
    display flex
}
.commodity {
    display flex
    width 6rem
    border-right .01rem solid #ededed
    padding .2rem
    img {
        width 0.6rem
        height .8rem
        margin-right .1rem
    }
    .commodity_type {
        line-height 1.5
        padding .2rem
        font-size .08rem
    }
}
.paymentStatus {
    border-right .01rem solid #ededed
    line-height 10
    width 3rem
    text-align center
    font-size .08rem
}
.price {
    width 3rem
    font-size .08rem
    border-right .01rem solid #ededed
    text-align center
    display flex
    flex-direction column
    justify-content center
    line-height 1.5
}
.operation {
    width 2rem
    display flex
    flex-direction column
    justify-content center
    align-items center
    .button_pay {
        margin-top 0.1rem
        width 1rem
    }
}
.sorter {
  text-align center
  margin-top .2rem
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
.el-button+.el-button {
  margin-left 0
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