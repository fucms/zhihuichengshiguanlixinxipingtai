import Layout from '@/layout'

const addressSelectRouter = {
  path: '/addressSelect',
  component: Layout,
  redirect: '/addressSelect/index',
  meta: { title: '监督中心受理子系统', icon: 'el-icon-s-check' },
  children: [
    {
      path: 'addressSelect',
      component: () => import('@/views/address/addressSelect/index.vue'),
      name: 'addressSelect',
      meta: { title: '坐席' }
    },
    {
      path: 'addressSelect',
      component: () => import('@/views/address/addressSelect/index.vue'),
      name: 'addressSelect',
      meta: { title: '咨询解答' }
    },
    {
      path: 'addressSelect',
      component: () => import('@/views/address/addressSelect/index.vue'),
      name: 'addressSelect',
      meta: { title: '查询定位' }
    },
    {
      path: 'addressSelect',
      component: () => import('@/views/address/addressSelect/index.vue'),
      name: 'addressSelect',
      meta: { title: '立案及案卷审批' }
    },
    {
      path: 'addressSelect',
      component: () => import('@/views/address/addressSelect/index.vue'),
      name: 'addressSelect',
      meta: { title: '核实、核查任务下发及反馈功能' }
    },
    {
      path: 'addressSelect',
      component: () => import('@/views/address/addressSelect/index.vue'),
      name: 'addressSelect',
      meta: { title: '结案归档管理' }
    }
  ]
}

export default addressSelectRouter
