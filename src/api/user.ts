import { BasicGetResult } from "#/resultType";
import { UserInfoModel } from "@/model/user";
import { http } from "@/utils/http";

enum API {
  FETCH_USER_INFO = "/user/info"
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
