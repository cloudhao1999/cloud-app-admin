import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/upload/image",
    method: "post",
    response: () => {
      return {
        errno: 0,
        message: "上传成功",
        status: "success",
        data: {
          url: "/images/avatar.jpg"
        }
      };
    }
  }
] as MockMethod[];
