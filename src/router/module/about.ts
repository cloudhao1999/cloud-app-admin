import { RouteRecordRaw } from "vue-router";

export default {
  path: "/about",
  name: "aboutMenu",
  meta: { menu: { title: "router.about", icon: "InfoFilled", hideParent: true, sort: 11 } },
  component: () => import("@/layouts/common-page.vue"),
  children: [
    {
      name: "aboutSub",
      path: "index",
      component: () => import("@/views/about/About.vue"),
      meta: { menu: { title: "router.about", icon: "InfoFilled" } }
    }
  ]
} as RouteRecordRaw;
