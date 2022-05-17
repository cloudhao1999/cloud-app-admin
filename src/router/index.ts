import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue")
  },
  { path: "/", redirect: { name: "HomePage" } }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
