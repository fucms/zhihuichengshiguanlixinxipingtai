import Layout from '@/layout'

const organizationalRouter = {
  path: '/organizational',
  component: Layout,
  redirect: '/alh_organizational/index',
  meta: { title: '监督指挥子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'alh_organizational',
      component: () => import('@/views/alh_organizational/ywdb/index.vue'),
      name: 'alh_organizational',
      meta: { title: '城市监督管理员实时监控' }
    },
    {
      path: 'alh_dianzimap',
      component: () => import('@/views/alh_dianzimap/index.vue'),
      name: 'alh_dianzimap',
      meta: { title: '电子地图' }
    },
    {
      path: 'alh_roulel',
      component: () => import('@/views/alh_organizational/roule/index.vue'),
      name: 'alh_roulel',
      meta: { title: '统计分析' }
    },
    {
      path: 'screenDisplay',
      component: () => import('@/views/alh_organizational/screenDisplay/index.vue'),
      name: 'screenDisplay',
      meta: { title: '大屏展示' }
    }
  ]
}

export default organizationalRouter
