<template>
    <el-tabs type="border-card">
        <el-tab-pane label="教师申请表" class="ApplyBox">
            <el-form ref="Form" class="ApplyForm" status-icon aria-autocomplete="no" :model="Form" :rules="rules" label-width="1.4rem" size="mini">
            <div class="Apply_title">申请成为教师</div>
            <el-form-item prop="name" label="专家姓名">
                <el-input  v-model="Form.name"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别">
                <el-radio-group v-model="Form.sex">
                    <el-radio label="1">男</el-radio>
                    <el-radio label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="phone" label="电话号码">
                <el-input  v-model="Form.phone"></el-input>
            </el-form-item>
            <el-form-item prop="age" label="年龄">
                <el-input v-model="Form.age"></el-input>
            </el-form-item>
            <el-form-item prop="subject" label="擅长领域/学科">
                <el-input  v-model="Form.subject"></el-input>
            </el-form-item>
            <!-- <el-form-item prop="address" label="所在区域">
                
                <el-input  v-model="Form.address"></el-input>
            </el-form-item> -->
             <el-form-item prop="address" label="所在区域">
                <el-select v-model="Form.province" placeholder="请选择"  style="width:1.5rem" >
                <el-option
                    v-for="item in province"
                    :key="item"
                    :label="item"
                    :value="item"
                ></el-option>
                </el-select>
                <el-select v-model="Form.city" placeholder="请选择"  style="width:1.5rem ;margin-left:.1rem">
                <el-option
                    v-for="item in cites"
                    :key="item"
                    :label="item"
                    :value="item"
                ></el-option>
                </el-select>
                <el-select v-model="Form.county" placeholder="请选择"  style="width:1.5rem ;margin-left:.1rem">
                <el-option
                    v-for="item in countes"
                    :key="item"
                    :label="item"
                    :value="item"
                ></el-option>
                </el-select>
                
            </el-form-item>
            <el-form-item label="详细地址" prop="address">
                <el-input  v-model="Form.address"></el-input>
            </el-form-item>
            <el-form-item prop="mechanism" label="所属机构">
                <el-select v-model="Form.mechanism" placeholder="请选择机构" style="width: 100%;">
                    <el-option v-for="(item, index) of mList" :key="index" :label="item" :value="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="con" label="个人简介">
                <el-input  type="textarea" v-model="Form.con" :rows="8"></el-input>
            </el-form-item>
            <el-form-item label="身份证正反面图片" prop="IDimg" >
                <el-upload
                action="#"
                list-type="picture-card"
                :before-upload="beforeupload"
                :on-change="imageChange1"
                ref="Idimg"
                :limit='2'
                :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}" >
                        <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt=""
                        >
                        <span class="el-upload-list__item-actions">
                            <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                            >
                            <i class="el-icon-zoom-in"></i>
                            </span>
                            <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file,'Idimg')"
                            >
                            <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>     
                </el-upload> 
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="相关证书上传" prop="certificateimg" >
                <el-upload
                action="#"
                list-type="picture-card"
                :before-upload="beforeupload"
                :on-change="imageChange2"
                ref="certificateimg"
                :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}" >
                        <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt=""
                        >
                        <span class="el-upload-list__item-actions">
                            <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                            >
                            <i class="el-icon-zoom-in"></i>
                            </span>
                            
                            <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file,'certificateimg')"
                            >
                            <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="50%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
        
            
            <el-form-item prop="checked">
                <el-checkbox v-model="Form.checked">同意网站专家协议</el-checkbox>
            </el-form-item>
            <el-button type="primary" style="width: 100%;margin-top: 0.22rem;" @click.native.prevent="handleLogin">提交</el-button>
        </el-form>
        </el-tab-pane>
        
    </el-tabs>
</template>

<script>
import addressData from '@/components/address-data.js'
export default {
    name:'apply',
    components: { 
       
    },
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            Form:{
                name:'',
                sex:'',
                phone:'',
                age:'',
                subject:'',
                province:null,//省份
                city:null,//城市
                county:null,
                address:'',
                mechanism:'',
                con:'',
                checked:false,
                IdCardImageUrl:[],
                CateImageUrl:[],
            },
            province:Object.keys(addressData),
            mList: ['机构1', '机构2', '机构3', '机构4'],
            rules:{
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { pattern:/^[\u4E00-\u9FA5]{2,6}$/, message: '请输入正确的名字', trigger: 'blur' }
                ],
                sex:{ required: true, message: '请选择性别', trigger: 'blur' },
                phone:[
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { pattern:/^1[3456789]\d{9}$/ , message: '请输入正确的手机号', trigger: 'blur' }
                ],
                age:[
                    { required: true, message: '请输入年龄', trigger: 'blur' },
                    { pattern:/^([2-5]\d)|60$/ , message: '请输入正确的手机号', trigger: 'blur' }
                ],
                subject:{ required: true, message: '请输入学科', trigger: 'blur' },
                address:{ required: true, message: '请选择地址', trigger: 'blur' },
                mechanism:{ required: true, message: '请选择机构', trigger: 'blur' },
                con:{ required: true, message: '请输入简介', trigger: 'blur' },
                checked:[
                    {
                        validator: function (rule, value, callback) {
                        // rule 代表当前的规则  无意义
                        // value 代表当前的值 checked的值
                        // callback  为回调函数
                        if (value) {
                            // 为真  执行 回调函数执行
                            callback()
                        } else {
                            callback(new Error('您未同意用户协议及条款'))
                        }
                        }
                    }
                ],
                IDimg: [
                    {
                        validator:(rule, value, callback)=> {
                            // rule 代表当前的规则  无意义
                            // value 代表当前的值 checked的值
                            // callback  为回调函数
                            console.log(this.Form.IdCardImageUrl.length)
                            if (this.Form.IdCardImageUrl.length>=2) {
                                // 为真  执行 回调函数执行
                                callback()
                            } else {
                                callback(new Error('请上传身份证照片'))
                            }
                        }
                    },
                ]
            }
        }
    },
    methods:{
        handleLogin() {
            this.$refs.Form.validate(valid => {
                if (valid) {
                    console.log(this.Form)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
            // this.$router.push('/education/personalcenter/audit')
            // this.$refs.Form.validate(isOk => {s
                
            //     if (isOk) {
            //     成功调用接口

                
            //     this.$axios({
            //         method: 'post',
            //         url: '/authorizations',
            //         data: this.formData
            //     }).then(res => {
            //         window.localStorage.setItem('token', res.data.data.token)
            //         // 编程式导航
            //         this.$router.push('/')
            //     }).catch(() => {
            //         this.$message({
            //         message: '手机号或验证码错误',
            //         type: 'warning'
            //         })
            //     })
            //     }
            // })
        },
        handleRemove(file,upload) {
            console.log(upload);
            
            let fileList = this.$refs[upload].uploadFiles;
            let index = fileList.findIndex( fileItem => {
                return fileItem.uid === file.uid
            })
            fileList.splice(index, 1)
            if ( upload == 'Idimg' ) {
                this.Form.IdCardImageUrl.splice(index,1)
            }else {
               this.Form.CateImageUrl.splice(index,1) 
            }
            
        },
        handlePictureCardPreview(file) {
            console.log(file.url)
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        beforeupload (file) {
            console.log(file)
        },
        imageChange1 (file, fileList, name) {
            console.log(file.url)
            this.Form.IdCardImageUrl.push(file.url)
            
        },
        imageChange2 (file, fileList, name) {
            console.log(file.url)
            this.Form.CateImageUrl.push(file.url)
        }
    },
    computed: {
    // 城市
    cites () {
      const province = this.Form.province
      let data = []
      if (province) {
        data = Object.keys(addressData[province])
      }
      return   data
    },
    // 县城
    countes () {
      const city = this.Form.city
      const province = this.Form.province
      let data = []

      if (city) {
        data = addressData[province][city]
      }
      return data
    }
  }
}
</script>

<style lang="stylus" scoped>
    .ApplyBox {
        padding: 0.3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .ApplyForm {
        width: 68%;
    }
    .ApplyForm .Apply_title {
        text-align: center;
        font-size: 0.24rem;
        font-weight: bold;
        margin: 0 0 0.3rem;
    }
    .ApplyBox >>>.el-upload-list--picture-card .el-upload-list__item {
    width: 1rem;
    height: 1rem;
    }
    .ApplyBox >>>.el-upload-list--picture-card .el-upload-list__item-actions {
    width: 1rem;
    height: 1rem;
    }
    .ApplyBox >>>.el-upload--picture-card {
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    }
    // .divwrap {
    // height: 50%;
    // width: 100%;
    // z-index: 99;
    // }
</style>