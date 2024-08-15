import Layout from '@/layout'

const alh_evaluationRouter = {
  path: '/alh_evaluation',
  component: Layout,
  redirect: '/alh_evaluation/index',
  meta: { title: '数据交换子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'alh_evaluation',
      component: () => import('@/views/alh_evaluation/index.vue'),
      name: 'alh_evaluation',
      meta: { title: '内外网数据交换模块' }
    },
    {
      path: 'alh_evaluation',
      component: () => import('@/views/alh_evaluation/index.vue'),
      name: 'alh_evaluation',
      meta: { title: '部门间数据共享交换模块' }
    },
    {
      path: 'alh_evaluation',
      component: () => import('@/views/alh_evaluation/index.vue'),
      name: 'alh_evaluation',
      meta: { title: '系统间数据交换' }
    }
  ]
}

export default alh_evaluationRouter
