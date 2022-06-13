import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    redirect: { name: "Dashboard" },
    component: () => import("@/layouts/common-page.vue"),
    meta: { auth: true, menu: { title: "router.home", icon: "Monitor" } },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { menu: { title: "router.dashboard" } },
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
  }
] as RouteRecordRaw[];

export default routes;
