import Layout from "@/layout";

const addressSelectRouter = {
  path: "/addressSelect",
  component: Layout,
  redirect: "/addressSelect/index",
  meta: { title: "我的案卷", icon: "el-icon-s-check" },
  children: [
    {
      path: "addressSelect",
      component: () => import("@/views/address/addressSelect/index.vue"),
      name: "addressSelect",
      meta: { title: "地图展示" },
    },
  ],
};

export default addressSelectRouter;
