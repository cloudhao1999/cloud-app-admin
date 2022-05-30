import { userStore } from "@/store/user";
import { Router, RouteRecordRaw } from "vue-router";
import autoloadModuleRoutes from "./module";

let routes: RouteRecordRaw[] = autoloadModuleRoutes();

function autoload(router: Router) {
  const user = userStore();
  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission;
      return permission ? user.info?.permissions.includes(permission) : true;
    });
    return route;
  });
  routes.forEach((r) => router.addRoute(r));
}

export default autoload;
