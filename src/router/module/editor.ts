import { RouteRecordRaw } from "vue-router";

export default {
  name: "design",
  path: "/design",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "创意设计", icon: "EditPen" } },
  children: [
    {
      name: "editor",
      path: "editor",
      component: () => import("@/views/design/EditorPage.vue"),
      meta: { menu: { title: "富文本编辑器" } }
    }
  ]
} as RouteRecordRaw;
