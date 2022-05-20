import { BasicGetResult } from "#/resultType";
import { UserInfoModel } from "@/model/user";
import { http } from "@/utils/http";

enum API {
  FETCH_USER_INFO = "/user/info",
  USER_LOGIN = "/login"
}

export interface ILoginForm {
  account: string;
  password: string;
}
/**
 *
 * @description 获取用户信息
 */
export const fetchUserInfo = () => {
  return new Promise<BasicGetResult<UserInfoModel>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicGetResult<UserInfoModel>>(API.FETCH_USER_INFO);
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
  return new Promise<BasicGetResult<{ token: string }>>(async (resolve, reject) => {
    try {
      const res = await http.post<{}, BasicGetResult<{ token: string }>>(API.USER_LOGIN, {
        params: data
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
