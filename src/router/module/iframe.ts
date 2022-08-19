export default {
  name: "iframe",
  path: "/iframe",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.iframe", icon: "MoonNight" } },
  children: [
    {
      name: "Vue.js",
      path: "vue",
      component: () => import("@/layouts/empty-page.vue"),
      meta: {
        menu: { title: "router.vue", iframe_link: "https://cn.vuejs.org/" }
      }
    }
  ]
};
