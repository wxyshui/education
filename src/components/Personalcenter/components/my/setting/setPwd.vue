<template>
  <div>
      <el-tabs type="border-card">
        <div class="setNewPwdBox">
          <el-steps style="width: 100%;" :active="active" align-center finish-status="success">
              <el-step title="填写账户名"></el-step>
              <el-step title="验证身份"></el-step>
              <el-step title="设置新密码"></el-step>
              <el-step title="成功"></el-step>
          </el-steps>
          <!-- 设置新密码页面 -->
          <el-form ref="Form" hide-required-asterisk status-icon :model="Form" :rules="Rules" label-width="1rem" id="setNewPwdstep3">
              <el-form-item prop="password" label="新的密码">
                  <el-input style="width: 86%;" name="password" type="password" v-model="Form.password" autoComplete="on" placeholder="设置6至20位登录密码"></el-input>
              </el-form-item>
              <el-form-item prop="again" label="重复密码">
                  <el-input style="width: 86%;" name="again" type="password" v-model="Form.again" autoComplete="on" placeholder="请再次输入登录密码"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="success" style="width: 86%;" @click="submitForm('Form')">下一步</el-button>
              </el-form-item>
          </el-form>
          <!-- 结果页面 -->
          <div id="setNewPwdstep4">
              <div class="outer">
                  <div id="loading2">
                      <div>
                          <i class="el-icon-loading" style="font-size: 1rem;"></i>
                          <p>请等待</p>
                      </div>
                  </div>
                  <div id="success2" style="display: none;">
                      <div>
                          <i class="el-icon-check" style="font-size: 1rem;"></i>
                          <p style="font-weight: bold;margin-bottom: 0.1rem;">密码重置成功</p>
                          <p>下次请使用新密码登录</p>
                      </div>
                  </div>
                  <el-button type="success" :disabled="disable" @click="Jump()">重新登录</el-button>
              </div>
            </div>
        </div>
      </el-tabs>
  </div>
</template>

<script>
import $ from 'jquery'
import { jump, removeUser } from '../../../../../untils/auth'
export default {
    name: 'setpwd',
    data() {
        const validatePassword = (rule, value, callback) => {
            if (!value) {
                callback(new Error('密码不能为空'))
            } else if (value.length < 6) {
                callback(new Error('密码长度不能少于6位'));
            } else if (value.length > 20) {
                callback(new Error('密码长度不能大于20位'))
            } else {
                callback();
            }
        }
        const validateAgain = (rlue, value, callback) => {
            if (!value) {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.Form.password) {
                callback(new Error('两次输入密码不一致'))
            } else {
                callback()
            }
        }
        return {
            Form: {
                password: '111111',
                again: '111111'
            },
            Rules: {
                password: [{ required: true, trigger: 'blur', validator: validatePassword }],
                again: [{ required: true, trigger: 'blur', validator: validateAgain }],
            },
            active: 2,
            disable: true
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (from.name !== 'SettingIndex') {
                vm.jump()
            }
        })
    },
    methods: {
        jump,
        Jump () {
            removeUser()
            this.jump('/login')
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.active = 3;
                    $('#setNewPwdstep3').hide();
                    $('#setNewPwdstep4').show();
                    var self = this;
                    setTimeout(function () {
                        $('#success2').show();
                        $('#loading2').hide();
                        self.active = 4;
                        self.disable = false;
                    }, 3000)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="stylus" scoped>
  .setNewPwdBox {
        border: 0.01rem solid #ccc;
        padding: 0.3rem 0.3rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #setNewPwdstep3 {
        margin-top: 0.3rem;
        width: 55%;
    }
    #setNewPwdstep4 {
        margin-top: 0.3rem;
        width: 55%;
        display: none;
        height: 1.6766rem;
    }
    #setNewPwdstep4 .outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #setNewPwdstep4 .outer #loading2 div, #setNewPwdstep4 .outer #success2 div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 1.62rem;
    }
    #setNewPwdstep4 .outer i {
        margin: 0.1rem auto 0.2rem;
    }
    #setNewPwdstep4 .outer .el-button {
        margin: 0.41rem auto 0;
        width: 86%;
    }
</style>