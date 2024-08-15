import Layout from '@/layout'

const alh_videoRouter = {
  path: '/alh_video',
  component: Layout,
  redirect: '/alh_video/index',
  meta: { title: '基础数据资源管理子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'alh_video',
      component: () => import('@/views/alh_video/index.vue'),
      name: 'alh_video',
      meta: { title: '图层控制' }
    },
    {
      path: 'alh_video',
      component: () => import('@/views/alh_video/index.vue'),
      name: 'alh_video',
      meta: { title: '专题数据管理' }
    },
    {
      path: 'alh_video',
      component: () => import('@/views/alh_video/index.vue'),
      name: 'alh_video',
      meta: { title: '符号化管理' }
    },
    {
      path: 'alh_video',
      component: () => import('@/views/alh_video/index.vue'),
      name: 'alh_video',
      meta: { title: '数据查询' }
    },
    {
      path: 'alh_video',
      component: () => import('@/views/alh_video/index.vue'),
      name: 'alh_video',
      meta: { title: '高级数据维护' }
    }
  ]
}

export default alh_videoRouter
