<template>
    <el-tabs type="border-card">
        <el-tab-pane label="更换手机号">
            <div class="setNewPhoneBox">
        
        <el-steps style="width: 100%;" :active="active" align-center finish-status="success">
            <el-step title="验证身份"></el-step>
            <el-step title="修改手机号码"></el-step>
            <el-step title="完成更改"></el-step>
        </el-steps>
        <!-- 验证身份页面 -->
        <el-form ref="Form" hide-required-asterisk status-icon :model="Form" :rules="Rules" label-width="1rem" id="setNewPhonestep1">
            <div class="form_tit">已绑定的手机：157******00</div>
            <div class="form_tips">若该手机号已经无法使用请联系客服</div>
            <el-form-item prop="code" label="验证码">
                <el-input v-model="Form.code" autoComplete="on" placeholder="短信验证码">
                    <el-button slot="append" type="primary" @click="changeCode()" :disabled="disabled">{{codetips}}</el-button>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" style="width: 86%;" @click="submitForm('Form')">下一步</el-button>
            </el-form-item>
        </el-form>
        <!-- 修改手机号码页面 -->
        <el-form ref="Form2" hide-required-asterisk status-icon :model="Form2" :rules="Rules2" label-width="1rem" id="setNewPhonestep2">
            <el-form-item prop="phone" label="手机号码">
                <el-input v-model="Form2.phone" placeholder="输入新的手机号码"></el-input>
            </el-form-item>
            <el-form-item prop="code" label="验证码">
                <el-input v-model="Form2.code" placeholder="短信验证码">
                    <el-button slot="append" type="primary" @click="changeCode2()" :disabled="disabled2">{{codetips2}}</el-button>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" style="width: 86%;" @click="submitForm2('Form2')">下一步</el-button>
            </el-form-item>
        </el-form>
        <!-- 结果页面 -->
        <div id="setNewPhonestep3">
            <div class="outer">
                <div id="loading3">
                    <div>
                        <i class="el-icon-loading" style="font-size: 1rem;"></i>
                        <p>请等待</p>
                    </div>
                </div>
                <div id="success3" style="display: none;">
                    <div>
                        <i class="el-icon-check" style="font-size: 1rem;"></i>
                        <p style="font-weight: bold;margin-bottom: 0.1rem;">手机号码更换成功</p>
                        <p>您可以在下次使用新号码进行登录</p>
                    </div>
                </div>
                <el-button type="success" :disabled="disable" @click="jump('/')">返回</el-button>
            </div>
        </div>
        
    </div>
        </el-tab-pane>
    </el-tabs>
    
</template>

<script>
import $ from 'jquery'
import { jump, createCode,ValidateIphone } from '../../../../../untils/auth'
export default {
    name: 'setNewPhoneBox',
    data() {
        const validateCode = (rlue, value, callback) => {
            if (!value) {
                callback(new Error('请输入验证码'))
            }
            // else if (value !== this.code) {
            //     callback(new Error('输入验证码错误'))
            // }
            else {
                callback()
            }
        };
        const validateIphone = (rule, value, callback) => {
            if (!value) {
                callback(new Error('手机号不能为空'))
            } else if (!ValidateIphone(value)) {
                callback(new Error('手机号格式不正确'))
            } else {
                callback()
            }
        }
        return {
            codetips: '获取验证码',
            Form: {
                code: ''
            },
            Rules: {
                code: [{ required: true, trigger: 'blur', validator: validateCode }],
            },
            active: 1,
            disable: true,
            disabled: false,
            codetips2: '获取验证码',
            Form2: {
                code: '',
                phone: '13800000000'
            },
            Rules2: {
                code: [{ required: true, trigger: 'blur', validator: validateCode }],
                phone: [{ required: true, trigger: 'blur', validator: validateIphone }],
            },
            disabled2: false,
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
        changeCode () {
            this.Form.code = createCode();
            this.disabled = true;
            this.codetips = '60秒后获取';
            var self = this;
            var codeNum = 60;
            var timer = setInterval(function () {
                codeNum--;
                if (codeNum == 0) {
                    clearInterval(timer);
                    self.codetips = '获取验证码';
                    self.disabled = false;
                } else {
                   self.codetips = codeNum + '秒后获取' 
                }
            }, 1000)
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.active = 1;
                    $('#setNewPhonestep1').hide();
                    $('#setNewPhonestep2').show()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        changeCode2 () {
            this.Form2.code = createCode();
            this.disabled2 = true;
            this.codetips2 = '60秒后获取';
            var self = this;
            var codeNum = 60;
            var timer = setInterval(function () {
                codeNum--;
                if (codeNum == 0) {
                    clearInterval(timer);
                    self.codetips2 = '获取验证码';
                    self.disabled2 = false;
                } else {
                   self.codetips2 = codeNum + '秒后获取' 
                }
            }, 1000)
        },
        submitForm2 (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.active = 2;
                    $('#setNewPhonestep2').hide();
                    $('#setNewPhonestep3').show();
                    var self = this;
                    setTimeout(function () {
                        $('#success3').show();
                        $('#loading3').hide();
                        self.active = 3;
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

<style>
    .setNewPhoneBox {
        border: 0.01rem solid #ccc;
        padding: 0.3rem 0.3rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #setNewPhonestep1, #setNewPhonestep2, #setNewPhonestep3 {
        margin-top: 0.3rem;
        width: 55%;
    }
    #setNewPhonestep2, #setNewPhonestep3 {
        display: none;
    }
    #setNewPhonestep1 .form_tit {
        text-align: center;
        font-size: 0.2rem;
        margin: 0.2rem 0;
    }
    #setNewPhonestep1 .form_tips {
        text-align: center;
        margin-bottom: 0.4rem;
    }
    #setNewPhonestep3 {
        height: 1.6766rem;
    }
    #setNewPhonestep3 .outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #setNewPhonestep3 .outer #loading3 div, #setNewPhonestep3 .outer #success3 div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 1.62rem;
    }
    #setNewPhonestep3 .outer i {
        margin: 0.1rem auto 0.2rem;
    }
    #setNewPhonestep3 .outer .el-button {
        margin: 0.41rem auto 0;
        width: 86%;
    }
</style>