import Layout from "@/layout";

const organizationalRouter = {
  path: "/organizational",
  component: Layout,
  redirect: "/alh_organizational/index",
  meta: { title: "督办案件", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_organizational",
      component: () => import("@/views/alh_organizational/ywdb/index.vue"),
      name: "alh_organizational",
      meta: { title: "业务督办箱" },
    },
    {
      path: "alh_roulel",
      component: () => import("@/views/alh_organizational/roule/index.vue"),
      name: "alh_roulel",
      meta: { title: "角色授权" },
    },
  ],
};

export default organizationalRouter;
