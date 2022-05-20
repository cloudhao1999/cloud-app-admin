import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/layouts/common-page.vue"),
    meta: { auth: true, menu: { title: "首页", icon: "Monitor" } },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { menu: { title: "工作台" } },
        component: () => import("@/views/HomePage.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: { guest: true },
    component: () => import("@/views/auth/LoginPage.vue")
  },
  {
    path: "/:any(.*)",
    name: "notFound",
    component: () => import("@/views/errors/404.vue")
  },
  { path: "/", redirect: { name: "Dashboard" } }
] as RouteRecordRaw[];

export default routes;
