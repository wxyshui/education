<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="个人资料">
        <el-form ref="Form" :model="Form"  size="small" label-width="1rem" class="PerInfoForm" >
          <div class="author">
            <el-avatar :size="100" :src="Form.avatar"></el-avatar>
            <el-upload
              class="upload-demo"
              :show-file-list="false"
              :http-request="onUpload"
              action="#"
            >
              <el-button type="text">修改头像</el-button>
            </el-upload>
          </div>
          <el-form-item  label="用户ID：" disabled style="width:50%">
            <el-input type="text" v-model="Form.userID"  style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="昵称：" style="width:50%">
            <el-input type="text" v-model="Form.nickname" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="用户名：" style="width:50%">
            <el-input type="text" v-model="Form.username" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="电话号码：" style="width:50%"> 
            <el-input type="text" v-model="Form.phone"  style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="性别：" style="width:50%">
            <el-radio v-model="Form.sex" label="1">男</el-radio>
            <el-radio v-model="Form.sex" label="2">女</el-radio>
            <el-radio v-model="Form.sex" label="3">保密</el-radio>
          </el-form-item>
          <el-form-item  label="电子邮箱：" style="width:50%">
            <el-input type="text" v-model="Form.email" size="small" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="生日：" style="width:50%">
            <el-date-picker v-model="Form.birthday" type="date" style="width:50%"></el-date-picker>
          </el-form-item>
          <el-form-item  label="擅长学科：" style="width:50%">
            <el-input type="text" v-model="Form.subject" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="所在城市：" style="width:50%">
            <el-input type="text" v-model="Form.city" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="教育程度:" style="width:50%">
            <el-select v-model="Form.education" placeholder="请选择" style="width:50%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item  label="所属机构" style="width:50%">
            <el-select v-model="Form.organization" placeholder="请选择" style="width:50%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item  label="兴趣爱好" style="width:50%">
            <el-input type="text" v-model="Form.hobby" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item  label="个性签名：" style="width:40%">
            <el-input type="textarea" v-model="Form.autograph"></el-input>
          </el-form-item>
        </el-form>
        <div class="save">
          <el-button type="primary" plain >保存</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      Form: {
        avatar: require("../../../../assets/images/author.png"),
        userID:'84474662',
        nickname:'永恒的风',
        username: "admin",
        phone: "150****9900",
        organ: "财务部",
        role: "角色",
        sex: "1",
        birthday: "1999-10-09",
        subject:'无',
        education:'大专',
        organization:'教育机构',
        email: "601111111@qq.com",
        city: "北京",
        hobby:'哈哈哈哈',
        autograph: "分厘卡顺丰哈积分落户就是"
      },
      options:[]
    };
  },

  methods:{
    onUpload(config) {
      console.log(config)
    }
  }
};
</script>

<style lang="stylus" scoped>

.PerInfoForm {
  padding:.3rem;
  display: flex;
  flex-wrap: wrap;
}
.PerInfoForm .author {
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items center
  padding-bottom: 0.3rem;
}
.save {
  display flex
  justify-content center
}
</style>