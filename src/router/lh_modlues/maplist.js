import Layout from '@/layout'

const addressSelectRouter = {
  path: '/address',
  component: Layout,
  redirect: '/sit/index',
  meta: { title: '监督中心受理子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'sit',
      component: () => import('@/views/address/sit/index.vue'),
      name: 'sit',
      meta: { title: '坐席' }
    },
    {
      path: 'queryAnswer',
      component: () => import('@/views/address/queryAnswer/index.vue'),
      name: 'queryAnswer',
      meta: { title: '咨询解答' }
    },
    {
      path: 'queryLocate',
      component: () => import('@/views/address/queryLocate/index.vue'),
      name: 'queryLocate',
      meta: { title: '查询定位' }
    },
    {
      path: 'openCase',
      component: () => import('@/views/address/openCase/index.vue'),
      name: 'openCase',
      meta: { title: '立案及案卷审批' }
    },
    {
      path: 'verifyTask',
      component: () => import('@/views/address/verifyTask/index.vue'),
      name: 'verifyTask',
      meta: { title: '核实、核查任务下发及反馈功能' }
    },
    {
      path: 'file',
      component: () => import('@/views/address/file/index.vue'),
      name: 'file',
      meta: { title: '结案归档管理' }
    }
  ]
}

export default addressSelectRouter
