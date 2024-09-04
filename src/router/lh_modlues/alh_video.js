import Layout from '@/layout'

const alh_videoRouter = {
  path: '/alh_video',
  component: Layout,
  redirect: '/layerControl/index',
  meta: { title: '基础数据资源管理子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'layerControl',
      component: () => import('@/views/alh_video/layerControl/index.vue'),
      name: 'layerControl',
      meta: { title: '图层控制' }
    },
    {
      path: 'specializedData',
      component: () => import('@/views/alh_video/specializedData/index.vue'),
      name: 'specializedData',
      meta: { title: '专题数据管理' }
    },
    {
      path: 'symbolic',
      component: () => import('@/views/alh_video/symbolic/index.vue'),
      name: 'symbolic',
      meta: { title: '符号化管理' }
    },
    {
      path: 'dataQuery',
      component: () => import('@/views/alh_video/dataQuery/index.vue'),
      name: 'dataQuery',
      meta: { title: '数据查询' }
    },
    {
      path: 'dataMaintenance',
      component: () => import('@/views/alh_video/dataMaintenance/index.vue'),
      name: 'dataMaintenance',
      meta: { title: '高级数据维护' }
    }
  ]
}

export default alh_videoRouter
