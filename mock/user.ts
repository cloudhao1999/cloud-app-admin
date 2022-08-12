import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/user/admin",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        data: {
          name: "管理员小陈",
          age: 18,
          avatar: "../../src/assets/img/avatar.jpg",
          permission: "admin",
          roleList: [
            "PermissionPage:add",
            "PermissionPage:edit",
            "PermissionPage:delete",
            "PermissionPage:batchDelete"
          ]
        }
      };
    }
  },
  {
    url: "/api/user/editor",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        data: {
          name: "股东小陈",
          age: 18,
          avatar: "../../src/assets/img/avatar.jpg",
          permission: "editor",
          roleList: ["PermissionPage:add", "PermissionPage:edit"]
        }
      };
    }
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        status: "success",
        data: {
          token: Random.string(20)
        }
      };
    }
  },
  {
    url: "/api/register",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "注册成功",
        status: "success",
        data: {
          token: Random.string(20)
        }
      };
    }
  },
  {
    url: "/api/account/forget-password",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        status: "success",
        data: {
          token: Random.string(20)
        }
      };
    }
  }
] as MockMethod[];
