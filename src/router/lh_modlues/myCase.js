import Layout from '@/layout'

const alh_myCaseRouter = {
  path: '/alh_myCase',
  component: Layout,
  redirect: '/alh_myCase/needToBe/index',
  meta: { title: '协同工作子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'needToBe',
      component: () => import('@/views/alh_myCase/needToBe/index.vue'),
      name: 'needToBe',
      meta: { title: '案卷办理' }
    },
    {
      path: 'myCase',
      component: () =>
        import('@/views/alh_myCase/myCase/index.vue'),
      name: 'myCase',
      meta: { title: '亲卷派遣' }
    },
    {
      path: 'ruleCase',
      component: () => import('@/views/alh_myCase/ruleCase/index.vue'),
      name: 'ruleCase',
      meta: { title: '案卷查询' }
    },
    {
      path: 'comprehensive',
      component: () => import('@/views/alh_myCase/comprehensive/index.vue'),
      name: 'comprehensive',
      meta: { title: '计时管理' }
    },
    {
      path: 'comprehensive',
      component: () => import('@/views/alh_myCase/comprehensive/index.vue'),
      name: 'comprehensive',
      meta: { title: '案卷督办' }
    },
    {
      path: 'comprehensive',
      component: () => import('@/views/alh_myCase/comprehensive/index.vue'),
      name: 'comprehensive',
      meta: { title: '信息提示' }
    },
    {
      path: 'comprehensive',
      component: () => import('@/views/alh_myCase/comprehensive/index.vue'),
      name: 'comprehensive',
      meta: { title: '流程查看' }
    }
  ]
}

export default alh_myCaseRouter
