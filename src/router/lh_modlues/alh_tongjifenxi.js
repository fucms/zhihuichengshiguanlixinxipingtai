import Layout from "@/layout";

const alh_tongjifenxiRouter = {
  path: "/alh_tongjifenxi",
  component: Layout,
  redirect: "/alh_tongjifenxi/index",
  meta: { title: "统计分析", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_tongjifenxi",
      component: () => import("@/views/alh_tongjifenxi/index.vue"),
      name: "alh_tongjifenxi",
      meta: { title: "统计分析" },
    },
  ],
};

export default alh_tongjifenxiRouter;
