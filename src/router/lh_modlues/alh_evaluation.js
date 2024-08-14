import Layout from "@/layout";

const alh_evaluationRouter = {
  path: "/alh_evaluation",
  component: Layout,
  redirect: "/alh_evaluation/index",
  meta: { title: "我的案卷", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_evaluation",
      component: () => import("@/views/alh_evaluation/index.vue"),
      name: "alh_evaluation",
      meta: { title: "考核评价" },
    },
  ],
};

export default alh_evaluationRouter;
