import Layout from "@/layout";

const alh_videoRouter = {
  path: "/alh_video",
  component: Layout,
  redirect: "/alh_video/index",
  meta: { title: "视屏监控", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_video",
      component: () => import("@/views/alh_video/index.vue"),
      name: "alh_video",
      meta: { title: "视屏监控" },
    },
  ],
};

export default alh_videoRouter;
