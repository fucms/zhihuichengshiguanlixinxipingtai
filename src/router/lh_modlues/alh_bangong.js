import Layout from "@/layout";

const alh_bangongRouter = {
  path: "/alh_bangong",
  component: Layout,
  redirect: "/alh_bangong/index",
  meta: { title: "办公助理", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_bangong",
      component: () => import("@/views/alh_bangong/index.vue"),
      name: "alh_bangong",
      meta: { title: "办公助理" },
    },
  ],
};

export default alh_bangongRouter;
