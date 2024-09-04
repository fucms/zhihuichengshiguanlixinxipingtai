import Layout from '@/layout'

const myRecordsRouter = {
  path: '/alh_myRecords',
  component: Layout,
  redirect: '/addressQuery/index',
  meta: { title: '地理编码子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'fuzzyQuery',
      component: () => import('@/views/alh_myRecords/fuzzyQuery/index.vue'),
      name: 'fuzzyQuery',
      meta: { title: '地址模糊查询定位' }
    },
    {
      path: 'accurateQuery',
      component: () => import('@/views/alh_myRecords/accurateQuery/index.vue'),
      name: 'accurateQuery',
      meta: { title: '地址精确查询定位' }
    },
    {
      path: 'convertAddress',
      component: () => import('@/views/alh_myRecords/convertAddress/index.vue'),
      name: 'convertAddress',
      meta: { title: '空间坐标转换为地址名称' }
    }
  ]
}

export default myRecordsRouter
