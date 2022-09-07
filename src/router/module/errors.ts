import { RouteRecordRaw } from "vue-router";

export default {
  name: "error",
  path: "/error",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.error", icon: "CircleCloseFilled" } },
  children: [
    {
      name: "404",
      path: "404",
      component: () => import("@/views/errors/404.vue"),
      meta: { menu: { title: "router.404" } }
    },
    {
      name: "403",
      path: "403",
      component: () => import("@/views/errors/403.vue"),
      meta: { menu: { title: "router.403" } }
    },
    {
      name: "500",
      path: "500",
      component: () => import("@/views/errors/500.vue"),
      meta: { menu: { title: "router.500" } }
    }
  ]
} as RouteRecordRaw;
