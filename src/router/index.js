import Vue from 'vue'
import Router from 'vue-router'
// 引入vuex
import store from '../vuex/store'
Vue.use(Router)

const router = new Router({
  routes: [
    // 首页，默认Home模板
    {
      path: '/',
      meta:{
        islogin: true
      },
      component: () => import("@/components/Home"),
      children: [
        {
          path: '/',
          name: 'Myhome',
          component: () => import("@/components/pages/Myhome"),
          meta:{
            islogin: true
          },
        },
        {
          path: '/Myhome',
          name: 'Myhome',
          component: () => import("@/components/pages/Myhome"),
          meta:{
            islogin: true
          },
        },
        {
          path: '/AboutUs',
          name: 'AboutUs',
          component: () => import("@/components/pages/AboutUs"),
          meta:{
            islogin: true
          },
        }
      ]
    },
    {
      path: '/Home',
      meta:{
        islogin: true
      },
      component: () => import("@/components/Home")
    },
    // 登录页面
    {
      path: '/Login',
      name: 'Login',
      component: () => import("@/components/login")
    },
    // 注册页面
    {
      path: '/Registered',
      name: 'Registered',
      component: () => import("@/components/registered")
    },
    // error 404页面
    {
      path: '*',
      name: 'error',
      component: () => import("@/components/error")
    }
  ]
})
router.beforeEach((to,from,next) => {
  //获取用户登录成功后储存的登录标志
  let islogin = localStorage.getItem("islogin");
  if(islogin){
    //设置vuex登录状态为已登录
    next()
  }else{
    // 定向登录页面
    if(to.meta.islogin){
      alert("请先登录")
      next({path:'./Login'})
    }else{
      next()
    }
  }
})

export default router