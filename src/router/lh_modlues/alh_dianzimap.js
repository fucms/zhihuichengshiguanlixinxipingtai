import Layout from "@/layout";

const alh_dianzimapRouter = {
  path: "/alh_dianzimap",
  component: Layout,
  redirect: "/alh_dianzimap/index",
  meta: { title: "电子地图", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_dianzimap",
      component: () => import("@/views/alh_dianzimap/index.vue"),
      name: "alh_dianzimap",
      meta: { title: "电子地图" },
    },
  ],
};

export default alh_dianzimapRouter;
