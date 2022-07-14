import { RouteRecordRaw } from "vue-router";
export default function autoloadModuleRoutes() {
  const modules: Record<
    string,
    {
      [key: string]: any;
    }
  > = import.meta.glob("../module/**/*.ts", { eager: true });

  const routes = [] as RouteRecordRaw[];

  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default);
  });

  return routes;
}
