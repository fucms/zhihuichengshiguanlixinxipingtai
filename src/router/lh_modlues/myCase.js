import Layout from "@/layout";

const alh_myCaseRouter = {
  path: "/alh_myCase",
  component: Layout,
  redirect: "/alh_myCase/needToBe/index",
  meta: { title: "我的案卷", icon: "el-icon-s-check" },
  children: [
    {
      path: "needToBe",
      component: () => import("@/views/alh_myCase/needToBe/index.vue"),
      name: "needToBe",
      meta: { title: "待办案卷" },
    },
    {
      path: "myCase",
      component: () =>
        import("@/views/alh_myCase/myCase/index.vue"),
      name: "myCase",
      meta: { title: "个人案卷查询" },
    },
    {
      path: "ruleCase",
      component: () => import("@/views/alh_myCase/ruleCase/index.vue"),
      name: "ruleCase",
      meta: { title: "部门案卷查询" },
    },
    {
      path: "comprehensive",
      component: () => import("@/views/alh_myCase/comprehensive/index.vue"),
      name: "comprehensive",
      meta: { title: "综合案卷查询" },
    },
  ],
};

export default alh_myCaseRouter;
