<template>
  <div class="authe">
    <el-tabs type="border-card">
        <el-tab-pane label="身份认证信息">
            <el-form label-position="left"  :model="formLabelAlign" label-width="1.7rem"size="mini" :rules="rules" ref='formLabelAlign'>
                <el-form-item label="审核状态：">
                    <el-input v-model="formLabelAlign.status"  readonly class="input_a"></el-input>
                </el-form-item>
                <div>
                    <el-form-item label="姓名：" prop="name">
                    <el-input v-model="formLabelAlign.name" placeholder="请输入姓名" class="input_a"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号码：" prop="IDnum">
                        <el-input v-model="formLabelAlign.IDnum" placeholder="请输入身份证号码" class="input_a"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="身份证正反面图片：" prop="IDimg" >
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
                    <el-form-item label="相关证书上传（选填）：" prop="certificateimg" >
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
                    
                    <el-form-item  >
                        <el-button type="primary" @click="submitForm('formLabelAlign')" plain class="refer" size="medium">提交</el-button>
                    </el-form-item>
                </div>
            </el-form>
            <div style="margin-top: 0.3rem;">
                <tips :list="list"></tips>
            </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import $ from 'jquery'
import Tips from '../../../../ivew/tips'
export default {
    name:'authentication',
    components: {
        Tips
    },
    data() {
        return {
            list:{
                title:'身份证正面照片提示信息：',
                arr:
                [
                    '请确保身份证是在有效期内的二代身份证；',
                    '请确保证件上所有的信息清晰有效，如：姓名、性别、民族、出生日期、地址身份证号码；',
                    '请勿提供临时身份证或复印件；',
                    '请勿遮挡你的身份证信息或进行任何修饰；',
                    '若提供虚假证件进行认证，你的账号将被关闭；'
                ]
            },
            formLabelAlign:{
                status:'未提交审核',
                name:'',
                IDnum:'',
                IdCardImageUrl: [],
                CateImageUrl: [],
            },
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            rules:{
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { pattern:/^[\u4E00-\u9FA5]{2,6}$/, message: '请输入正确的名字', trigger: 'blur' }
                ],
                 IDnum:[
                { required: true, message: '请输入身份证号', trigger: 'blur' },
                { pattern:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, message: '请输入正确的身份证号码', trigger: 'blur' }
                ],
                IDimg: [
                    {
                        validator:(rule, value, callback)=> {
                            // rule 代表当前的规则  无意义
                            // value 代表当前的值 checked的值
                            // callback  为回调函数
                            console.log(this. formLabelAlign.IdCardImageUrl.length)
                            if (this. formLabelAlign.IdCardImageUrl.length>=2) {
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
        // 提交
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                alert('submit!');
                } else {
                console.log('error submit!!');
                }
            })
        },
        // 删除已选的照片
        handleRemove(file,upload) {
            console.log(upload);
            
            let fileList = this.$refs[upload].uploadFiles;
            let index = fileList.findIndex( fileItem => {
                return fileItem.uid === file.uid
            })
            fileList.splice(index, 1)
            if ( upload == 'Idimg' ) {
                this.formLabelAlign.IdCardImageUrl.splice(index,1)
            }else {
               this.formLabelAlign.CateImageUrl.splice(index,1) 
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
            this.formLabelAlign.IdCardImageUrl.push(file.url)
            
        },
        imageChange2 (file, fileList, name) {
            console.log(file.url)
            this.formLabelAlign.CateImageUrl.push(file.url)
        }
    }
}
</script>

<style lang="stylus" scoped>
.input_a {
    width: 2rem;
}

.refer {
    margin-left 2.9rem
}

.authe >>>.el-upload-list--picture-card .el-upload-list__item {
    width: 1rem;
    height: 1rem;
}
.authe >>>.el-upload-list--picture-card .el-upload-list__item-actions {
    width: 1rem;
    height: 1rem;
}
.authe >>>.el-upload--picture-card {
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
}

</style>