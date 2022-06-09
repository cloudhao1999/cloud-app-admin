export default {
  name: "iframe",
  path: "/iframe",
  component: () => import("@/layouts/common-page.vue"),
  meta: { menu: { title: "内嵌页面", icon: "MoonNight" } },
  children: [
    {
      name: "Vue.js",
      path: "vue",
      component: () => import("@/layouts/empty-page.vue"),
      meta: {
        menu: { title: "Vue.js", iframe_link: "https://staging-cn.vuejs.org/" }
      }
    }
  ]
};
