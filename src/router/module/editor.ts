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
      meta: { menu: { title: "router.article" } }
    },
    {
      name: "editor",
      path: "editor",
      component: () => import("@/views/design/EditorPage.vue"),
      meta: { menu: { title: "router.editor" } }
    },
    {
      name: "watermark",
      path: "watermark",
      component: () => import("@/views/design/WaterMark.vue"),
      meta: { menu: { title: "router.watermark" } }
    }
  ]
} as RouteRecordRaw;
