import { Router, RouteRecordRaw } from "vue-router";
import autoloadModuleRoutes from "./module";

const routes: RouteRecordRaw[] = autoloadModuleRoutes();

function autoload(router: Router) {
  routes.forEach((r) => router.addRoute(r));
}

export default autoload;
