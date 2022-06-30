export default {
  name: "nested",
  path: "/nested",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.nested", icon: "MoonNight" } },
  children: [
    {
      name: "Level1",
      path: "level1",
      component: () => import("@/layouts/common-page.vue"),
      meta: {
        menu: { title: "router.level1", icon: "MoonNight", nested: true }
      },
      children: [
        {
          name: "Level2",
          path: "level2",
          component: () => import("@/views/errors/404.vue"),
          meta: {
            menu: { title: "router.level2", iframe_link: "https://staging-cn.vuejs.org/" }
          }
        }
      ]
    }
  ]
};
