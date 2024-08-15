import Layout from '@/layout'

const proccessRouter = {
  path: '/alh_proccess',
  component: Layout,
  redirect: '/alh_proccess/index',
  meta: { title: '综合评价子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'alh_proccess',
      component: () => import('@/views/alh_proccess/index.vue'),
      name: 'alh_proccess',
      meta: { title: '岗位评价' }
    },
    {
      path: 'alh_proccess',
      component: () => import('@/views/alh_proccess/index.vue'),
      name: 'alh_proccess',
      meta: { title: '专业部门评价' }
    },
    {
      path: 'alh_proccess',
      component: () => import('@/views/alh_proccess/index.vue'),
      name: 'alh_proccess',
      meta: { title: '区域评价' }
    },
    {
      path: 'alh_proccess',
      component: () => import('@/views/alh_proccess/index.vue'),
      name: 'alh_proccess',
      meta: { title: '评价结果导出' }
    }
  ]
}

export default proccessRouter
