import Vue from 'vue'
import Router from 'vue-router'

import LoginIndex from '@/components/Login/index'
import Login from '@/components/Login/login'
import Register from '@/components/Login/register'
import ForgetPass from '@/components/Login/forgetPass'
import ChangePass from '@/components/Login/changePass'

// 教育服务系统
import Education from '@/components/Education/education'
// 教育服务系统首页
import EducationIndex from '@/components/Education/index'
// 师资分享首页
import TeacherIndex from '@/components/Education/teacherIndex'
// 课件分享首页
import CoursewareIndex from '@/components/Education/coursewareIndex'
// 文档分享首页
import FileIndex from '@/components/Education/fileIndex'
// 师资分享列表
import TeacherShare from '@/components/Education/components/teacherShareList/teacherShare'
// 课件分享列表
import CoursewareShare from '@/components/Education/components/CoursewareShareList/coursewareShare'
// 文档分享列表
import FileShare from '@/components/Education/components/fileShareList/fileShare'
// 公告列表
import NoticeList from '@/components/Education/components/NoticeList/noticeList'
// 资讯列表
import NewsList from '@/components/Education/components/newsList/newsList'
// 师资详情页
import TeacherInfo from '@/components/Education/components/teacherShareList/TeacherInfo/teacherInfo'
// 课件详情页
import CoursewareInfo from '@/components/Education/components/CoursewareShareList/CoursewareInfo/coursewareInfo'
// 公告详情页
import NoticeDetail from '@/components/Education/components/NoticeList/noticeDetail'
// 师资评价列表页
import TeacherEvaluate from '@/components/Education/components/teacherShareList/teacherEvaluate/teacherEvaluate'
//评价详情页
import EvaluaeDetails from '@/components/Education/components/teacherShareList/teacherEvaluate/replyDetails'


// 个人中心系统
import Personalcenter from '@/components/Personalcenter/personalcenter'
// 购物车首页
import ShopCartIndex from '@/components/Personalcenter/components/my/shopcartindex'
//  余额详情
import Balance from '@/components/Personalcenter/components/my/mybalance'
// 充值
import Recharge from '@/components/Personalcenter/components/my/recharge'
//  银行卡  
import BankCard from '@/components/Personalcenter/components/my/bankcard'
// 添加银行卡
import AddBankcard from '@/components/Personalcenter/components/my/addbankcard'
//  积分
import Integral from '@/components/Personalcenter/components/my/myintegral'
// 我的订单
import MyIndent from '@/components/Personalcenter/components/my/myindent'
// 订单评价
import OrderEvaluate from '@/components/Personalcenter/components/my/orderevaluate'
// 我分享的资料
import MyProfile from '@/components/Personalcenter/components/my/myprofile'
// 本地资源
import LocalResource from '@/components/Personalcenter/components/my/localresource'
//  我是教师
import Teacher from '@/components/Personalcenter/components/my/teacher'
// 用户中心
import UserCenter from '@/components/Personalcenter/components/my/usercenter'
//  安全设置
import SecuritySet from '@/components/Personalcenter/components/my/setting/index'
// 密码修改
import SetPwd from '@/components/Personalcenter/components/my/setting/setPwd'
// 更换手机号
import SetPhone from '@/components/personalcenter/components/my/setting/setphone'
// 身份认证
import Authentication from '@/components/Personalcenter/components/my/setting/authentication'
//  账户绑定
import AccountBind from '@/components/Personalcenter/components/my/setting/accountbind'
// 个人信息
import UserInfo from '@/components/Personalcenter/components/my/userinfo'
//  我的专注
import Attention from '@/components/Personalcenter/components/my/myattention'
//  我的收藏
import Collect from '@/components/Personalcenter/components/my/mycollect'
// 我的消息
import Message from '@/components/Personalcenter/components/my/mymessage'
// 我的竞拍
import Auction from '@/components/Personalcenter/components/my/myauction'
// 申请成为教师
import Apply from '@/components/Personalcenter/components/my/apply'
// 信息审核
import Audit from '@/components/Personalcenter/components/my/audit'
Vue.use(Router)

export const constantRouterMap = [
  // 登录系统
  {
    // 登录总页面
    path: '/login',
    name: 'LoginIndex',
    component: LoginIndex,
    redirect: '/login/index',
    children: [
      {
        // 登录
        path: 'index',
        name: 'Login',
        component: Login
      },
      {
        // 注册
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        // 忘记密码
        path: 'forgetPass',
        name: 'ForgetPass',
        component: ForgetPass
      },
      {
        //修改密码
        path: 'changePass',
        name: 'ChangePass',
        component: ChangePass
      }
    ]
  },
  // 教育服务系统
  {
    path: '/education',
    name: 'Education',
    component: Education,
    meta: {title: '首页'},
    redirect: '/education/index',
    children: [
      {
        // 首页
        path: 'index',
        name: 'EducationIndex',
        meta: {title: '首页'},
        component: EducationIndex
      },
      {
        // 师资分享首页
        path: 'teacherIndex',
        name: 'TeacherIndex',
        meta: {title: '师资分享首页'},
        component: TeacherIndex
      },
      {
        // 课件分享首页
        path: 'coursewareIndex',
        name: 'CoursewareIndex',
        meta: {title: '课件分享首页'},
        component: CoursewareIndex
      },
      {
        // 文档分享首页
        path: 'fileIndex',
        name: 'FileIndex',
        meta: {title: '文档分享首页'},
        component: FileIndex
      },
      {
        // 师资分享列表
        path: 'teacherList',
        name: 'teacherShareList',
        meta: {title: '师资资源'},
        component: TeacherShare
      },
      {
        // 课件分享列表
        path: 'coursewareList',
        name: 'coursewareShareList',
        meta: {title: '课件资源'},
        component: CoursewareShare
      },
      {
        // 文档分享列表
        path: 'fileList',
        name: 'fileShareList',
        meta: {title: '文档资源'},
        component: FileShare
      },
      {
        // 公告列表
        path: 'noticeList',
        name: 'NoticeList',
        meta: {title: '最新公告'},
        component: NoticeList
      },
      {
        // 资讯列表
        path: 'newsList',
        name: 'NewsList',
        meta: {title: '最新资讯'},
        component: NewsList
      },
      {
        // 师资详情页
        path: 'teacherInfo',
        name: 'TeacherInfo',
        meta: {title: '师资详情'},
        component: TeacherInfo
      },
      {
        // 课件详情页
        path: 'coursewareInfo',
        name: 'CoursewareInfo',
        meta: {title: '课件详情'},
        component: CoursewareInfo
      },
      {
        // 公告详情页
        path: 'noticeDetail',
        name: 'NoticeDetail',
        meta: {title: '公告详情'},
        component: NoticeDetail
      },
      {
        // 师资评价列表页
        path: 'teacherEvaluate',
        name: 'TeacherEvaluate',
        meta: {title: '师资评价列表'},
        component: TeacherEvaluate
      },
      {
        // 评价详情页
        path:'evaluaeDetails',
        name:'EvaluaeDetails',
        meta:{title: '评价详情列表'},
        component:EvaluaeDetails
      },
      {
        // 个人中心
        path:'personalcenter',
        name: 'personalcenter',
        component: Personalcenter,
        redirect: 'personalcenter/shopindex',
        children:[
          {
            //我的购物车
            path: 'shopindex',
            name: "ShopCartindex",
            meat:{title:'我的购物车'},
            component:ShopCartIndex
          },
          {
            //余额
            path:'balance',
            name:"Balance",
            meat:{title:'余额'},
            component:Balance
          },
          {
            //充值
            path:'recharge',
            name:"recharge",
            meat:{title:'充值'},
            component:Recharge
          },
          {
            //银行卡
            path:'bankcard',
            name:"BankCard",
            meat:{title:'银行卡'},
            component:BankCard
          },
          {
            //添加银行卡
            path:'addbankcard',
            name:"addbankcard",
            meat:{title:'添加银行卡'},
            component:AddBankcard
          },
          {
            //积分
            path:'integral',
            name:"integral",
            meat:{title:'积分'},
            component:Integral
          },
          {
            // 我的订单 
            path:'myindent',
            name:"myindent",
            meat:{title:'我的订单'},
            component:MyIndent
          },
          {
            // 订单评价 
            path:'orderevaluate',
            name:"orderevaluate",
            meat:{title:'订单评价'},
            component:OrderEvaluate
          },
          {
            // 我分享的资料
            path:'myprofile',
            name:"myprofile",
            meat:{title:'我分享的资料'},
            component:MyProfile
          },
          {
            // 本地资料
            path:'localresource',
            name:"localresource",
            meat:{title:'本地资料'},
            component:LocalResource
          },
          {
            // 我是教师
            path:'teacher',
            name:"teacher",
            meat:{title:'我是教师'},
            component:Teacher
          },
          {
            // 用户中心
            path:'usercenter',
            name:"usercenter",
            meat:{title:'用户中心'},
            component:UserCenter
          },
          {
            // 安全设置
            path:'securityset',
            name:"securityset",
            meat:{title:'安全设置'},
            component:SecuritySet
          },
          {
            // 密码修改
            path:'setpwd',
            name:"setpwd",
            meat:{title:'修改密码'},
            component:SetPwd
          },
          {
            // 更换手机号
            path:'setphone',
            name:"setphone",
            meat:{title:'更换手机号'},
            component:SetPhone
          },
          {
            // 身份认证
            path:'authentication',
            name:"authentication",
            meat:{title:'身份证认证'},
            component:Authentication
          },
          {
            //账户绑定
            path:'accountbind',
            name:"accountbind",
            meat:{title:'账户绑定'},
            component:AccountBind
          },
          {
            // 个人信息
            path:'userinfo',
            name:"userinfo",
            meat:{title:'个人信息'},
            component:UserInfo
          },
          {
            // 我的关注
            path:'attention',
            name:"attention",
            meat:{title:'我的关注'},
            component:Attention
          },
          {
            // 我的收藏
            path:'collect',
            name:"collect",
            meat:{title:'个人信息'},
            component:Collect
          },
          {
            // 我的消息
            path:'message',
            name:"message",
            meat:{title:'我的消息'},
            component:Message
          },
          {
            // 我的竞拍
            path:'auction',
            name:"auction",
            meat:{title:'我的消息'},
            component:Auction
          },
          {
            // 申请成为教师
            path:'apply',
            name:"apply",
            meat:{title:'申请成为教师'},
            component:Apply
          },
          {
            // 信息审核
            path:'audit',
            name:"audit",
            meat:{title:'信息审核'},
            component:Audit
          },
        ]
      }          
    ]
  }, 
   // 默认路径
  {
    path: '/',
    redirect: '/education'
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

]


