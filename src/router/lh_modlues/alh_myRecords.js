import Layout from '@/layout'

const myRecordsRouter = {
  path: '/alh_myRecords',
  component: Layout,
  redirect: '/alh_myRecords/index',
  meta: { title: '地理编码子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'alh_myRecords',
      component: () => import('@/views/alh_myRecords/index.vue'),
      name: 'alh_myRecords',
      meta: { title: '地址模糊查询定位' }
    },
    {
      path: 'alh_myRecords',
      component: () => import('@/views/alh_myRecords/index.vue'),
      name: 'alh_myRecords',
      meta: { title: '地址精确查询定位' }
    },
    {
      path: 'alh_myRecords',
      component: () => import('@/views/alh_myRecords/index.vue'),
      name: 'alh_myRecords',
      meta: { title: '空间坐标转换为地址名称' }
    }
  ]
}

export default myRecordsRouter
