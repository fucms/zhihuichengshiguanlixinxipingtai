import Layout from "@/layout";

const superviseAndHandleRouter = {
  path: "/superviseAndHandle",
  component: Layout,
  redirect: "/alh_superviseAndHandle/proccess/index",
  meta: { title: "督办案件", icon: "el-icon-s-check" },
  children: [
    // {
    //   path: "duban",
    //   component: () => import("@/views/alh_superviseAndHandle/duban/index.vue"),
    //   name: "duban",
    //   meta: { title: "业务督办箱" },
    // },
    {
      path: "proccess",
      component: () =>
        import("@/views/alh_superviseAndHandle/proccess/index.vue"),
      name: "proccess",
      meta: { title: "业务审批箱" },
    },
    {
      path: "spacetext",
      component: () => import("@/views/alh_superviseAndHandle/text/index.vue"),
      name: "spacetext",
      meta: { title: "问题案卷库" },
    },
  ],
};

export default superviseAndHandleRouter;
