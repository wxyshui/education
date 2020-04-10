<template>
  <div>
    <el-tabs type="border-card">
      <!-- 我的积分 -->
      <el-tab-pane label="我的积分">
        <el-row :gutter="20" >
          <el-col :span="8">
            <div class="grid-content bg-purple">
                <div>当前积分</div>
                <div style="font-size:.24rem">{{integralNum}}</div>
                <div v-if="common">
                    <div class="upgrade">
                        <span>普通用户：差{{differenceIntegral}}积分升级为专家</span>
                        <el-button type="text" @click="onupgrade">升级</el-button>
                    </div>
                    <div style="width:2rem">
                        <el-progress :percentage="percentage"  :stroke-width="12" :show-text=false></el-progress>
                    </div>
                </div> 
                <div v-else>恭喜您，成为专家用户</div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="integralstatistics">
              <p>最近3个月积分统计</p>
              <div class="release">
                 <div class="coursewarerelease">
                  <span>课件发布</span>
                  <div class="integralNum">{{integralstatistics.coursewarerelease}}</div>
                 </div>
                  <div>
                    <span>文档发布</span>
                    <div class="integralNum">{{integralstatistics.documentsReleased}}</div>
                  </div>
              </div>
              <div class="integraluse">
                <span>积分使用</span>
                <div class="integralNum">{{integralstatistics.integraluse}}</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 近期明细 -->
        <div class="recent">近期明细</div>
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="date" label="时间"  align="left"></el-table-column>
          <el-table-column prop="type" label="类型"  align="center"></el-table-column>
          <el-table-column prop="integral" label="积分"  align="right"></el-table-column>
        </el-table>
      </el-tab-pane>



      <!-- 积分明细 -->
      <el-tab-pane label="积分明细">
        <div class="gainintearal">您已获得{{gainintearal}}积分（仅显示半年记录）</div>

        <!-- form 表单 -->
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline" size="mini" ref="ruleForm">
          <el-form-item prop="status" >
            <el-select v-model="ruleForm.status" placeholder="交易状态" >
              <el-option label="交易状态" value="1"></el-option>
              <el-option label="进行中" value="2"></el-option>
              <el-option label="已完结" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="user">
            <el-input v-model="ruleForm.user" placeholder="请输入关键字"></el-input>
          </el-form-item>
           <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('ruleForm')"type="primary" plain>重置</el-button>
          </el-form-item>
         
        </el-form>


        <!-- 积分明细渲染 -->
        <el-table :data="tableintegral" style="width: 100%" >
          <el-table-column prop="date" label="日期"  align="left"></el-table-column>
          <el-table-column prop="type" label="来源"  align="center"></el-table-column>
          <el-table-column prop="integral" label="积分" align="right"></el-table-column>
        </el-table>

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
    name:'shopintegral',
    data() {
      return {
        totalCount:50,
        ruleForm :{
          user: '',
          status: ''
        },
        integralNum:1930,
        differenceIntegral:1000,
        common:true,
        percentage:100,
        gainintearal:1000,
        tableData:[
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
        ],
        tableintegral:[
           {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          }, {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          }, {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          }, {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          }, {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          }, {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          }, {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          }, {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
          {
            date:"2017-05-01 15:00",
            type:"发布课件获得",
            integral :"+5"
          },
        ],
        integralstatistics:{
            coursewarerelease:"+1000",   
            documentsReleased:'+800',
            integraluse:'-1000'
        }
          
           
        

      }
    },
    methods: {
    
      onupgrade () {
        if (this.percentage === 100) {
            this.common=false
            return
          }
        this.$message({
          message: '您当前积分不足，再接再厉！'
        });  
      },
       resetForm(e) {
        this.$refs[e].resetFields()
      }
    }
};
</script>

<style lang="stylus" scoped>
  
  .grid-content {
    border .005rem solid  #ccc
    height 2rem
    display flex
    flex-direction:column
    justify-content:space-around
    align-items center
    .upgrade {
        vertical-align middle 
        span {
          margin-right  .1rem
        }
      }
    }
.recent {
  color #666
  font-size .09rem
  margin-top 0.2rem
  margin-bottom .1rem
}
.gainintearal {
  height .3rem
  line-height .3rem
  background-color #cccc
  color #f9f9f9
}
.demo-form-inline {
  margin-top .1rem  
  // margin-bottom .1rem
}
.sorter {
  text-align center
  margin-top .1rem
}
.integralstatistics {
  border .005rem solid  #ccc
  height 2rem
  padding .2rem
  display flex
  flex-direction column
  justify-content space-around
  span {
    
    font-size .14rem
    color #999999
    line-height 0.36rem
  }
  p {
    font-size .2rem
    font-weight 700
  }
  .release {
    display flex
    .coursewarerelease {
      margin-left .3rem 
      margin-right 1rem
      
    }
  }
  .integraluse {
    margin-left .3rem
  }
  .integralNum {
    font-size 0.24rem
    color #1E1E1E
  }
}
</style>