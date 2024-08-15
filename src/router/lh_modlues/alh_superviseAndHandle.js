import Layout from '@/layout'

const superviseAndHandleRouter = {
  path: '/superviseAndHandle',
  component: Layout,
  redirect: '/alh_superviseAndHandle/proccess/index',
  meta: { title: '监督数据无线采集子系统', icon: 'el-icon-s-check' },
  children: [
    // {
    //   path: "duban",
    //   component: () => import("@/views/alh_superviseAndHandle/duban/index.vue"),
    //   name: "duban",
    //   meta: { title: "业务督办箱" },
    // },
    {
      path: 'proccess',
      component: () =>
        import('@/views/alh_superviseAndHandle/proccess/index.vue'),
      name: 'proccess',
      meta: { title: '服务器端' }
    },
    {
      path: 'spacetext',
      component: () => import('@/views/alh_superviseAndHandle/text/index.vue'),
      name: 'spacetext',
      meta: { title: '城管通终端' }
    }
  ]
}

export default superviseAndHandleRouter
