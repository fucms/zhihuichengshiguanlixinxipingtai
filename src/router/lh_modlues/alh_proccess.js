import Layout from '@/layout'

const proccessRouter = {
  path: '/alh_proccess',
  component: Layout,
  redirect: '/jobEvaluation/index.vue',
  meta: { title: '综合评价子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'jobEvaluation',
      component: () => import('@/views/alh_proccess/jobEvaluation/index.vue'),
      name: 'jobEvaluation',
      meta: { title: '岗位评价' }
    },
    {
      path: 'departEvaluation',
      component: () => import('@/views/alh_proccess/departEvaluation/index.vue'),
      name: 'departEvaluation',
      meta: { title: '专业部门评价' }
    },
    {
      path: 'regionalEvaluation',
      component: () => import('@/views/alh_proccess/regionalEvaluation/index.vue'),
      name: 'regionalEvaluation',
      meta: { title: '区域评价' }
    },
    {
      path: 'evaluationResult',
      component: () => import('@/views/alh_proccess/evaluationResult/index.vue'),
      name: 'evaluationResult',
      meta: { title: '评价结果导出' }
    }
  ]
}

export default proccessRouter
