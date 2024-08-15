import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/* Layout */
import Layout from '@/layout'
/* Router Modules */
import alh_superviseAndHandle from './lh_modlues/alh_superviseAndHandle'
import alh_myCaseRouter from './lh_modlues/myCase'
import organizationalRouter from './lh_modlues/alh_organizational'
import proccessRouter from './lh_modlues/alh_proccess'
import myRecordsRouter from './lh_modlues/alh_myRecords'
import addressSelectRouter from './lh_modlues/maplist'
import alh_evaluationRouter from './lh_modlues/alh_evaluation'
import alh_tongjifenxiRouter from './lh_modlues/alh_tongjifenxi'
import alh_videoRouter from './lh_modlues/alh_video'

// constantRoutes 没有权限的基页，所有角色都可以查看
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        // component: () => import("@/views/dashboard/index"),
        component: () => import('@/views/alh_superviseAndHandle/duban/index.vue'),
        name: 'Dashboard',
        meta: { title: '智慧城市管理信息平台', icon: 'el-icon-s-home', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人概要', icon: 'user', noCache: true }
      }
    ]
  }
]
// asyncRoutes 需要根据用户角色动态加载的路由
export const asyncRoutes = [
  alh_superviseAndHandle,
  addressSelectRouter,
  alh_myCaseRouter,
  organizationalRouter,
  proccessRouter,
  myRecordsRouter,
  alh_evaluationRouter,
  alh_tongjifenxiRouter,
  alh_videoRouter,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
