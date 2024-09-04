import Layout from '@/layout'

const alh_tongjifenxiRouter = {
  path: '/alh_tongjifenxi',
  component: Layout,
  redirect: '/organStructure/index',
  meta: { title: '应用维护子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'organStructure',
      component: () => import('@/views/alh_tongjifenxi/organStructure/index.vue'),
      name: 'organStructure',
      meta: { title: '组织机构管理' }
    },
    {
      path: 'functionalModule',
      component: () => import('@/views/alh_tongjifenxi/functionalModule/index.vue'),
      name: 'functionalModule',
      meta: { title: '功能模块管理' }
    },
    {
      path: 'roleAuthorization',
      component: () => import('@/views/alh_tongjifenxi/roleAuthorization/index.vue'),
      name: 'roleAuthorization',
      meta: { title: '角色授权管理' }
    },
    {
      path: 'workTime',
      component: () => import('@/views/alh_tongjifenxi/workTime/index.vue'),
      name: 'workTime',
      meta: { title: '工作时间管理' }
    },
    {
      path: 'supervisor',
      component: () => import('@/views/alh_tongjifenxi/supervisor/index.vue'),
      name: 'supervisor',
      meta: { title: '监督员责任区' }
    },
    {
      path: 'itemType',
      component: () => import('@/views/alh_tongjifenxi/itemType/index.vue'),
      name: 'itemType',
      meta: { title: '事项类别管理' }
    },
    {
      path: 'processDefinition',
      component: () => import('@/views/alh_tongjifenxi/processDefinition/index.vue'),
      name: 'processDefinition',
      meta: { title: '流程定义管理' }
    },
    {
      path: 'activityRole',
      component: () => import('@/views/alh_tongjifenxi/activityRole/index.vue'),
      name: 'activityRole',
      meta: { title: '活动角色对应' }
    },
    {
      path: 'workForm',
      component: () => import('@/views/alh_tongjifenxi/workForm/index.vue'),
      name: 'workForm',
      meta: { title: '工作表单定义' }
    }
  ]
}

export default alh_tongjifenxiRouter
