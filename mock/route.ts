import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/route/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        data: [
          {
            name: "remote",
            path: "/remote",
            component: "common-page",
            meta: { auth: true, menu: { title: "router.remote", icon: "Cloudy" } },
            children: [
              {
                name: "article_remote",
                path: "article_remote",
                component: "/design/ArticlePage.vue",
                meta: { menu: { title: "router.article_remote" } }
              }
            ]
          }
        ]
      };
    }
  }
] as MockMethod[];
