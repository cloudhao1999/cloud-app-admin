import { fetchRouteInfo } from "@/api/route";
import { userStore } from "@/store/user";
import { getToken } from "@/utils/auth";
import { Recordable } from "vite-plugin-mock";
import { Router, RouteRecordRaw } from "vue-router";
import autoloadModuleRoutes from "./module";

let routes: RouteRecordRaw[] = autoloadModuleRoutes();
let dynamicViewsModules: Record<string, () => Promise<Recordable>>;

const LayoutMap = new Map<string, () => Promise<typeof import("*.vue")>>();
LayoutMap.set("common-page", () => import("@/layouts/common-page.vue"));

/**
 * 收集嵌套路由元信息并组装
 * @param children 嵌套的子路由
 * @returns 路由元信息
 */
function filterNestedChildren(children: RouteRecordRaw[]) {
  const user = userStore();
  if (user.info?.permission === undefined) return children;

  return children.filter((r) => {
    const permissions = r.meta?.permissions;

    if (r.children) {
      r.children = filterNestedChildren(r.children);
    }

    return permissions ? permissions?.includes(user.info.permission!) : true;
  });
}

/**
 * 根据已有的页面模块匹配路由
 * @param dynamicViewsModules 动态路由模块
 * @param r 路由元信息
 * @returns 匹配结果
 */
function matchDynamicComponent(
  dynamicViewsModules: Record<string, () => Promise<Recordable>>,
  r: RouteRecordRaw
) {
  const keys = Object.keys(dynamicViewsModules);
  return keys.filter((key) => {
    const k = key.replace("/src/views", "");
    const startIndex = 0;
    const lastIndex = k.length;
    return k.substring(startIndex, lastIndex) === `${r.component}`;
  });
}

/**
 * 过滤从服务器回传的路由元数据
 * @param route 远程路由
 * @returns 过滤后的路由
 */
function filterRemoteRoute(route: RouteRecordRaw[]): RouteRecordRaw[] {
  dynamicViewsModules = dynamicViewsModules || import.meta.glob("@/views/**/*.{vue,tsx}");
  return route.map((r) => {
    if (r.children) {
      r.children = filterRemoteRoute(r.children);
    }

    // 获取匹配路由文件
    const path = `${r.component}`;
    if (LayoutMap.has(path)) {
      r.component = LayoutMap.get(path);
    }

    // 获取页面路由模块
    const matchKeys = matchDynamicComponent(dynamicViewsModules, r);
    if (matchKeys?.length === 1) {
      const matchKey = matchKeys[0];
      r.component = dynamicViewsModules[matchKey];
    }
    return r;
  });
}

/**
 * 获取远程路由元数据
 * @returns 远程路由
 */
async function fetchRemoteRoute() {
  const res = await fetchRouteInfo();
  return filterRemoteRoute(res.data);
}

/**
 * 路由自动装配
 * @param router 路由实例
 */
async function autoload(router: Router) {
  const remoteFlag = !!getToken();

  if (remoteFlag) {
    const remoteRoutes = await fetchRemoteRoute();
    routes = [...routes, ...remoteRoutes];
  }

  routes = routes.map((route) => {
    route.children = filterNestedChildren(route.children!);
    return route;
  });

  routes.forEach((r) => router.addRoute(r));
}

export default autoload;
