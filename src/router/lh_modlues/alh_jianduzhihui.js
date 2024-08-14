import Layout from "@/layout";

const alh_jianduzhihuiRouter = {
  path: "/alh_jianduzhihui",
  component: Layout,
  redirect: "/alh_jianduzhihui/index",
  meta: { title: "监督指挥", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_jianduzhihui",
      component: () => import("@/views/alh_jianduzhihui/index.vue"),
      name: "alh_jianduzhihui",
      meta: { title: "监督指挥" },
    },
  ],
};

export default alh_jianduzhihuiRouter;
