import Layout from '@/layout'

const alh_tongjifenxiRouter = {
  path: '/alh_tongjifenxi',
  component: Layout,
  redirect: '/alh_tongjifenxi/index',
  meta: { title: '应用维护子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '组织机构管理' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '功能模块管理' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '角色授权管理' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '工作时间管理' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '监督员责任区' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '事项类别管理' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '流程定义管理' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '活动角色对应' }
    },
    {
      path: 'alh_tongjifenxi',
      component: () => import('@/views/alh_tongjifenxi/index.vue'),
      name: 'alh_tongjifenxi',
      meta: { title: '工作表单定义' }
    }
  ]
}

export default alh_tongjifenxiRouter
