export default {
  name: "nested",
  path: "/nested",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.nested", icon: "Folder" } },
  children: [
    {
      name: "Level1",
      path: "level1",
      component: () => import("@/layouts/nested-page.vue"),
      meta: {
        menu: { title: "router.level1", icon: "FolderAdd", nested: true }
      },
      children: [
        {
          name: "Level2",
          path: "level2",
          component: () => import("@/views/nested/Level.vue"),
          meta: {
            menu: { title: "router.level2" }
          }
        }
      ]
    }
  ]
};
