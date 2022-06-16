import { RouteRecordRaw } from "vue-router";

export default {
  name: "i18n",
  path: "/i18n",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.i18n", icon: "Promotion" } },
  children: [
    {
      name: "i18nTest",
      path: "i18nTest",
      component: () => import("@/views/i18n/i18nTest.vue"),
      meta: { menu: { title: "router.i18nTest" } }
    }
  ]
} as RouteRecordRaw;
