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
        data: new Array(10).fill("").map((article, index) => {
          return {
            id: index + 1,
            title: Random.ctitle(),
            content: Random.cparagraph()
          };
        })
      };
    }
  }
] as MockMethod[];
