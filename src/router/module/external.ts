export default {
  name: "external",
  path: "/external",
  component: () => import("@/layouts/common-page.vue"),
  meta: { menu: { title: "外链", icon: "Link" } },
  children: [
    {
      name: "Github",
      path: "404",
      component: () => import("@/layouts/empty-page.vue"),
      meta: {
        menu: { title: "Github仓库", path: "https://github.com/cloudhao1999/cloud-app-admin" }
      }
    }
  ]
};
