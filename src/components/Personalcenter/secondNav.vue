<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16" style="">
        <div class="threeNav">
          <el-dropdown size="mini" class="nav-item">
            <span class="el-dropdown-link" @click="jump('/education/personalcenter/usercenter')">
              我的
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="jump('/education/personalcenter/attention')">我的关注</el-dropdown-item>
              <el-dropdown-item @click.native="jump('/education/personalcenter/myindent')">订单中心</el-dropdown-item>
              <el-dropdown-item @click.native="jump()">我的消息</el-dropdown-item>
              <el-dropdown-item @click.native="jump()">我的聊天</el-dropdown-item>
              <el-dropdown-item @click.native="jump('/education/personalcenter/balance')">我的钱包</el-dropdown-item>
              <el-dropdown-item @click.native="jump('/education/personalcenter/auction')">我的竞拍</el-dropdown-item>
              <el-dropdown-item @click.native="jump('/education/personalcenter/collect')">我的收藏</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="mini" class="nav-item">
            <span class="el-dropdown-link">
              账户设置
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="jump('/education/personalcenter/userinfo')">个人信息</el-dropdown-item>
              <el-dropdown-item @click.native="jump('/education/personalcenter/bankcard')">我的银行卡</el-dropdown-item>
              <el-dropdown-item @click.native="jump('/education/personalcenter/securityset')">账户安全</el-dropdown-item>
              <el-dropdown-item @click.native="jump('/education/personalcenter/accountbind')">安全绑定</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="el-dropdown-link nav-item" @click="jump('/education/personalcenter/message')">消息</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="search-box">
          <!-- 查询输入框 -->
          <div class="search-input">
            <!-- 下拉选择 -->
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <!-- 分割线 -->
            <div class="line"></div>
            <!-- <div class="line"></div> -->
            <el-input v-model="condition" placeholder="请输入内容" size="mini"></el-input>
          </div>
          <div class="search-btn">
            <el-button size="mini" @click="search">搜索</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { jump } from "../../untils/auth";
export default {
  data() {
    return {
      input: "",
      condition:'',
      options: [
        {
          value: 1,
          label: "课件"
        },
        {
          value: 2,
          label: "文档文献"
        },
        {
          value: 3,
          label: "教师"
        }
      ],
      value: ""
    };
  },
  methods: {
    jump,
    search() {
      
      if (this.value == 1) {
          this.$router.push('/education/coursewareList')
      }
      else if(this.value == 2) {
          this.$router.push('/education/fileList')

      }else {
          this.$router.push('/education/teacherList')
      }
  }
  }
};
</script>

<style  lang="stylus" scoped>

// 导航
.el-dropdown-link:hover {
  cursor: pointer;
  color: #00b087;
}

.el-dropdown-menu__item:focus, .el-dropdown-menu__item:hover {
  background-color: #fff;
  color: #00b087;
}

.nav-item {
  margin-right: 0.22rem;
}
.threeNav {
  vertical-align middle
  height .28rem
  line-height .28rem
}
  // 搜索
.search-box {
  border: 1px solid #00b087;
  display: flex;
  flex-flow: row nowrap;
}

.search-input {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}

.search-input >>> .el-input__inner {
  border: none;
}

.line {
  height: 0.2rem;
  width: 2px;
  background: #efefef;
}

.el-button {
  border: none;
  border-radius: 0;
  background: #00b087;
  color: #ffffff;
  line-height: 1.2;
}
</style>