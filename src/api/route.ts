import { BasicGetResult } from "#/resultType";
import { http } from "@/utils/http";
import { RouteRecordRaw } from "vue-router";

enum API {
  FETCH_ROUTER_INFO = "/route/info"
}

/**
 *
 * @description 获取远程路由信息
 */
export const fetchRouteInfo = () => {
  return new Promise<BasicGetResult<RouteRecordRaw[]>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicGetResult<RouteRecordRaw[]>>(API.FETCH_ROUTER_INFO);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
