<template>
  <div>
    <!-- 银行卡 -->
    <el-tabs type="border-card">
      <el-tab-pane label="银行卡">
        <div class="bank">
          <div class="bankcards" v-for="(item,index) in bankcardList" :key="item.id">
            <div class="bankcard">
              <img :src="item.img" alt />
              <span>{{item.bankName}}</span>
              <div class="bankcardNum">{{item.bankcardNum}}</div>
            </div>
            <el-button size="medium " class="remove" type="primary" plain @click="unbundle()">解除绑定</el-button>
          </div>
          <!-- 添加银行卡 -->
          <el-button
            type="text"
            class="addbankcard"
            @click="jump('/education/personalcenter/addbankcard')"
          >
            <i class="el-icon-plus avatar-uploader-icon"></i> 添加银行卡
          </el-button>
        </div>
      </el-tab-pane>
      <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <span>成功验证支付密码后即可解绑银行卡！</span>
        <div class="pay">
          <span>支付密码：</span>
          <el-input placeholder="请输入密码" v-model="password" show-password size="mini" class="password"></el-input>
          <el-button type="text" style="font-size:.12rem">找回支付密码？</el-button>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-tabs>
  </div>
</template>

<script>
import { jump } from "../../../../untils/auth.js";
export default {
  data () {
    return {
      bankcardList:[
        {
          id:1,
          img:require('../../../../assets/images/home.png'),
          bankName:"中国农业银行",
          bankcardNum:'8898**********2365'
        },
        {
          id:2,
          img:require('../../../../assets/images/home.png'),
          bankName:"中国农业银行",
          bankcardNum:'8898**********2365'
        },
        {
          id:3,
          img:require('../../../../assets/images/home.png'),
          bankName:"中国农业银行",
          bankcardNum:'8898**********2365'
        },
        {
          id:4,
          img:require('../../../../assets/images/home.png'),
          bankName:"中国农业银行",
          bankcardNum:'8898**********2365'
        },
      ],
      dialogVisible:false,
      password:''
    }
  },
  methods:{
    jump,
    unbundle() {
      this.dialogVisible = true
      console.log(1);
    }
  
  }
}
</script>

<style lang="stylus" scoped>
.bank {
  display: flex;
  flex-wrap: wrap;
  // justify-content space-around
}

.bankcards, .addbankcard {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  margin-left: 0.5rem;
   
}

.bankcard, .addbankcard {
  background-color: #f2f2f2;
  height: 1.2rem;
  width: 2.4rem;
  border: 0.001rem solid #ccc;

  // vertical-align middle
  img {
    width: 0.2rem;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }

  span {
    margin-left: 0.1rem;
    vertical-align: bottom;
  }

  .bankcardNum {
    margin-left: 0.25rem;
    margin-top: 0.3rem;
  }
}

.remove {
  width: 2.4rem;
}

.addbankcard {
  height: 1.6rem;
  font-size: 0.15rem;
}

.el-tabs__item {
  color: #00b087;
}

.password {
  margin-top .2rem
  display inline-block
  width 1.5rem
  margin-right .4rem
}
</style>