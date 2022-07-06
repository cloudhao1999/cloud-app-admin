import { RouteRecordRaw } from "vue-router";

export default {
  name: "design",
  path: "/design",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.design", icon: "EditPen" } },
  children: [
    {
      name: "article",
      path: "article",
      component: () => import("@/views/design/ArticlePage.vue"),
      meta: { menu: { title: "router.article" }, permission: "article_edit" }
    },
    {
      name: "editor",
      path: "editor",
      component: () => import("@/views/design/EditorPage.vue"),
      meta: { menu: { title: "router.editor" }, permission: "editor" }
    }
  ]
} as RouteRecordRaw;
