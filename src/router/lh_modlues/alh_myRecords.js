import Layout from "@/layout";

const myRecordsRouter = {
  path: "/alh_myRecords",
  component: Layout,
  redirect: "/alh_myRecords/index",
  meta: { title: "我的案卷", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_myRecords",
      component: () => import("@/views/alh_myRecords/index.vue"),
      name: "alh_myRecords",
      meta: { title: "案卷流程信息" },
    },
  ],
};

export default myRecordsRouter;
