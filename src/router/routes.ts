import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue")
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/auth/LoginPage.vue")
  },
  { path: "/", redirect: { name: "HomePage" } }
] as RouteRecordRaw[];

export default routes;
