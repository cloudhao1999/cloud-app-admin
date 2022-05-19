import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/layouts/CommonPage.vue"),
    children: [
      { path: "dashboard", name: "Dashboard", component: () => import("@/views/HomePage.vue") }
    ]
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/auth/LoginPage.vue")
  },
  { path: "/", redirect: { name: "Dashboard" } }
] as RouteRecordRaw[];

export default routes;
