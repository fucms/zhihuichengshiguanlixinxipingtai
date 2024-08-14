import Layout from "@/layout";

const proccessRouter = {
  path: "/alh_proccess",
  component: Layout,
  redirect: "/alh_proccess/index",
  meta: { title: "业务审批箱", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_proccess",
      component: () => import("@/views/alh_proccess/index.vue"),
      name: "alh_proccess",
      meta: { title: "业务审批列表" },
    },
  ],
};

export default proccessRouter;
