import { BasicResult } from "#/resultType";
import { UserInfoModel } from "@/model/user";
import { http } from "@/utils/http";

enum API {
  FETCH_USER_INFO = "/user/admin",
  FETCH_EDITOR_INFO = "/user/editor",
  FETCH_ROUTER_INFO = "/user/route",
  USER_LOGIN = "/login"
}

export interface ILoginForm {
  account: string;
  password: string;
}
/**
 *
 * @description 获取用户信息（权限为管理员）
 */
export const fetchAdminInfo = () => {
  return new Promise<BasicResult<UserInfoModel>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicResult<UserInfoModel>>(API.FETCH_USER_INFO);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @description 获取用户信息（权限为普通）
 */
export const fetchEditorInfo = () => {
  return new Promise<BasicResult<UserInfoModel>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicResult<UserInfoModel>>(API.FETCH_EDITOR_INFO);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @description 登录
 */
export const userLogin = (data: ILoginForm) => {
  return new Promise<BasicResult<{ token: string }>>(async (resolve, reject) => {
    try {
      const res = await http.post<{}, BasicResult<{ token: string }>>(API.USER_LOGIN, {
        data
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
