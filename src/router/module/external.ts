export default {
  name: "external",
  path: "/external",
  component: () => import("@/layouts/common-page.vue"),
  meta: { menu: { title: "router.external", icon: "Link" } },
  children: [
    {
      name: "Github",
      path: "404",
      component: () => import("@/layouts/empty-page.vue"),
      meta: {
        menu: { title: "router.github", path: "https://github.com/cloudhao1999/cloud-app-admin" }
      }
    },
    {
      name: "Blog",
      path: "blog",
      component: () => import("@/layouts/empty-page.vue"),
      meta: {
        menu: { title: "router.blog", path: "https://www.cloudhao.top" }
      }
    },
    {
      name: "Bilibili",
      path: "bilibili",
      component: () => import("@/layouts/empty-page.vue"),
      meta: {
        menu: {
          title: "router.bilibili",
          path: "https://space.bilibili.com/28615318?spm_id_from=333.1007.0.0"
        }
      }
    }
  ]
};
