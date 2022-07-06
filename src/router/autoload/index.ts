import { userStore } from "@/store/user";
import { Router, RouteRecordRaw } from "vue-router";
import autoloadModuleRoutes from "./module";

let routes: RouteRecordRaw[] = autoloadModuleRoutes();

/**
 * 收集嵌套路由元信息并组装
 * @param children 嵌套的子路由
 * @returns 路由元信息
 */
function filterNestedChildren(children: RouteRecordRaw[]) {
  const user = userStore();
  if (user.info?.permissions === undefined) return children;

  return children.filter((r) => {
    const permission = r.meta?.permission;
    if (r.children) {
      r.children = filterNestedChildren(r.children);
    }
    return permission ? user.info?.permissions?.includes(permission) : true;
  });
}

function autoload(router: Router) {
  routes = routes.map((route) => {
    route.children = filterNestedChildren(route.children!);
    return route;
  });
  routes.forEach((r) => router.addRoute(r));
}

export default autoload;
