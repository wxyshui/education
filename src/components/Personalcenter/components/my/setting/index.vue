<template>
  <div>
      <el-tabs type="border-card">
        <el-tab-pane label="安全设置">
          <div class="settingBox">
            <div class="option">
                <div class="option_l">
                    <div class="option_tit">登录密码</div>
                    <span>建议您定期更换密码，设置安全性高的密码可以使账号更安全</span>    
                </div>
                <div class="option_r">
                    <el-button @click="jump('/education/personalcenter/setpwd')" plain type="primary">修改</el-button>
                </div>
            </div>
            <div class="option">
                <div class="option_l">
                    <div class="option_tit">安全手机157******00</div>
                    <span>安全手机可以用于登录账号，重置密码或其他安全验证</span>    
                </div>
                <div class="option_r">
                    <el-button @click="jump('/education/personalcenter/setphone')" plain type="primary">更换</el-button>
                </div>
            </div>
            <div class="option">
                <div class="option_l">
                    <div class="option_tit">身份认证</div>
                    <span>身份认证用于网上核实身份，一经绑定不可修改，严禁使用他人身份证认证。</span>    
                </div>
                <div class="option_r">
                    <el-button @click="jump('/education/personalcenter/authentication')" plain type="primary">认证</el-button>
                </div>
            </div>
            <div style="margin-top: 0.3rem;">
                <tips :list="list"></tips>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import Tips from '../../../../ivew/tips'
import { jump} from '../../../../../untils/auth'
export default {
  name:'securityset',
  components: {
    Tips
  },
  data () {
    return {
      list: {
        title: '安全服务提示',
        arr: ['确认您登录的是轨道交通知识服务平台网址，注意防范进入钓鱼网站，不要轻信各种即时通讯工具发送的商品或支付链接，谨防网购骗','建议您安装杀毒软件，并定期更新操作系统等软件补丁，确保账号及交易安全']
      }
    }
  },
  methods: {
      jump
  }
}
</script>

<style lang="stylus" scoped>
 .settingBox {
      border: 0.01rem solid #ccc;
      padding: 0.3rem;
    }
    .settingBox .title {
      padding-left: 0.1rem;
      padding-bottom: 0.3rem;
      border-bottom: 0.01rem solid #ccc;
    }
    .option {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.3rem 0.8rem;
      border-bottom: 0.01rem solid #ccc;
    }
    .option_r {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .option_r .el-button {
      width: 1rem;
    }
    .option_tit {
      font-size: 0.14rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }
    .option_l {
      span {
        color #999999
      }
    }

</style>