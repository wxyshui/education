<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="服务消息">
        <!-- 表单 -->
        <el-form
          :inline="true"
          :model="formData"
          class="demo-form-inline"
          size="mini"
          ref="formData">
          <el-form-item prop="status">
            <el-select v-model="formData.status" placeholder="消息类型">
              <el-option label="全部" value="1"></el-option>
              <el-option label="商家消息" value="2"></el-option>
              <el-option label="个人消息" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="user" >
            <el-input v-model="formData.user" placeholder="请输入关键字"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="resetForm('formData')" plain type="primary">重置</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 数据渲染 -->
        <div class="messages">
          <div class="message" v-for="item in list" :key="item.id">
            <div class="message-top">
              <span>{{item.title}}</span>
              <div class="message-right">
                <span class="read"></span>
                <span class="time">{{item.time}}</span>
              </div>
            </div>
            <div class="massage-bottom">
              <span>{{item.content}}</span>
              <el-button type="text">查看详情</el-button>
            </div>
          </div>
        </div>

        <!-- 分页器 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total=totalCount
          class="sorter">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="系统消息">
        <!-- 表单 -->
        <el-form
          :inline="true"
          :model="Form"
          class="demo-form-inline"
          size="mini"
          ref="Form">
          <el-form-item prop="status">
            <el-select v-model="Form.status" placeholder="消息类型">
              <el-option label="全部" value="1"></el-option>
              <el-option label="交易类" value="2"></el-option>
              <el-option label="通知公告类" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="user" >
            <el-input v-model="Form.user" placeholder="请输入关键字"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="resetForm('Form')" plain type="primary">重置</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 数据渲染 -->
        <div class="messages">
          <div class="message" v-for="item in lists" :key="item.id">
            <div class="message-top">
              <span>{{item.title}}</span>
              <div class="message-right">
                <span class="read"></span>
                <span class="time">{{item.time}}</span>
              </div>
            </div>
            <div class="massage-bottom">
              <span>{{item.content}}</span>
              <el-button type="text"  @click="ondetails(item)">查看详情</el-button>
            
            </div>
          </div>
          <el-dialog
            title="我是"
            :visible.sync="centerDialogVisible"
            width="30%"
            center
            >
            <div slot="title">
              <div>{{shade.title}}</div>
              <div>{{shade.time}}</div>
            </div>
            <div>{{shade.details}}</div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="centerDialogVisible = false" plain>确 定</el-button>
            </span>
            </el-dialog>
        </div>

        <!-- 分页器 -->
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
export default {
  name: "message",
  data() {
    return {
      formData: {
        status: "",
        user: ""
      },
      Form:{
        status: "",
        user: ""
      },
      list:[
        {
          title:'xxx发来消息注意查收',
          time:'2017-12-26  21:10:30',
          content:'您昨天累计收到1张价值10.0元的优惠券，赶紧快去看看吧！',
        },
        {
          title:'xxx发来消息注意查收',
          time:'2017-12-26  21:10:30',
          content:'您昨天累计收到1张价值10.0元的优惠券，赶紧快去看看吧！',
        },
        {
          title:'xxx发来消息注意查收',
          time:'2017-12-26  21:10:30',
          content:'您昨天累计收到1张价值10.0元的优惠券，赶紧快去看看吧！',
        },
        {
          title:'xxx发来消息注意查收',
          time:'2017-12-26  21:10:30',
          content:'您昨天累计收到1张价值10.0元的优惠券，赶紧快去看看吧！',
        },
        {
          title:'xxx发来消息注意查收',
          time:'2017-12-26  21:10:30',
          content:'您昨天累计收到1张价值10.0元的优惠券，赶紧快去看看吧！',
        },
      ],
      lists:[
        { 
          id:1,
          title:'系统更新公告',
          time:'2017-12-26  21:10:30',
          content:'尊敬的用户，为了给您带来更好的体验，系统将于2017年4月26日22：00-2017年4月27日09:00期间进行更新',
          details:'尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
        },
        { 
          id:2,
          title:'系统更新公告2',
          time:'2017-12-26  21:10:30',
          content:'尊敬的用户，为了给您带来更好的体验，系统将于2017年4月26日22：00-2017年4月27日09:00期间进行更新',
          details:'尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
        },
        { 
          id:3,
          title:'系统更新公告3',
          time:'2017-12-26  21:10:30',
          content:'尊敬的用户，为了给您带来更好的体验，系统将于2017年4月26日22：00-2017年4月27日09:00期间进行更新',
          details:'尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
        },
        { 
          id:4,
          title:'系统更新公告4',
          time:'2017-12-26  21:10:30',
          content:'尊敬的用户，为了给您带来更好的体验，系统将于2017年4月26日22：00-2017年4月27日09:00期间进行更新',
          details:'尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
        },
        { 
          id:5,
          title:'系统更新公告5',
          time:'2017-12-26  21:10:30',
          content:'尊敬的用户，为了给您带来更好的体验，系统将于2017年4月26日22：00-2017年4月27日09:00期间进行更新',
          details:'尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
        },
      ],
      shade:"",
      totalCount:50,
      centerDialogVisible: false
    };
  },
  methods:{
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    ondetails(e) {
      
      this.shade = e
      this.centerDialogVisible = true
    },
    
  }
};
</script>

<style lang="stylus" scoped >
.message {
  height .7rem
  border 0.01rem solid #ededed
  box-sizing border-box
  font-size .12rem
  margin-bottom .2rem
}
.message-top {
  height 0.3rem
  background-color #f9f9f9
  border-bottom  0.01rem solid #ededed
  line-height 0.3rem
  padding-left .1rem
  padding-right .1rem
  .message-right {
    float right
  }
  .read {
    display inline-block
    width .04rem
    height .04rem
    background-color #ff2222
    vertical-align middle
  }
  .time {
    color #999
    margin-left .5rem
  }
}
.massage-bottom {
  line-height .3rem
  padding-left .1rem
  padding-right .1rem
  span {
    color #999
    vertical-align middle
  }
  >>>.el-button--text {
    font-size .12rem
    float right   
  }
}
.sorter {
  text-align center
  margin-top .2rem
}
</style>