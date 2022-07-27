import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/article",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        total: 20,
        data: new Array(10).fill("").map((article, index) => {
          return {
            id: index + 1,
            title: Random.ctitle(),
            content: Random.cparagraph()
          };
        })
      };
    }
  },
  {
    url: "/api/article/type",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        total: 3,
        data: [
          {
            label: "历史",
            value: "history"
          },
          {
            label: "文学",
            value: "literature"
          },
          {
            label: "科技",
            value: "technology"
          }
        ]
      };
    }
  },
  {
    url: "/api/deleteArticle",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "删除成功",
        status: "success",
        data: {
          count: 1
        }
      };
    }
  },
  {
    url: "/api/editArticle",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "编辑成功",
        status: "success",
        data: {
          count: 1
        }
      };
    }
  },
  {
    url: "/api/addArticle",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "添加成功",
        status: "success",
        data: {
          count: 1
        }
      };
    }
  }
] as MockMethod[];
