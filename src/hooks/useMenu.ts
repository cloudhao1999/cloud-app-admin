import { IMenu } from "#/menu";
import { ref } from "vue";
import router from "@/router";
import { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw } from "vue-router";
import { useStorage } from "@vueuse/core";
import { CacheEnum } from "@/enum/cacheEnum";

class Menu {
  public menus = ref<IMenu[]>([]);
  public history = useStorage<IMenu[]>(CacheEnum.HISTORY_MENU, []);
  public route = ref(null as null | RouteLocationNormalized);
  public close = useStorage<boolean>(CacheEnum.MENU_CLOSE_STATE, false);

  constructor() {
    this.menus.value = this.getMenuByRoute();
    this.history.value = this.getHistoryMenu();
  }

  removeHistoryMenu(menu: IMenu) {
    const index = this.history.value.indexOf(menu);
    this.history.value.splice(index, 1);
  }

  addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta?.menu) return;
    this.route.value = route;

    const menu: IMenu = { ...route.meta?.menu, route: route.name as string };
    const isHas = this.history.value.some((menu) => menu.route == route.name);
    if (!isHas) this.history.value.unshift(menu);
    if (this.history.value.length > 10) {
      this.history.value.pop();
    }
  }

  private getHistoryMenu() {
    const routes = [] as RouteRecordRaw[];
    router.getRoutes().map((r) => routes.push(...r.children));

    return this.history.value.filter((m) => {
      return routes.some((r) => r.name == m.route);
    });
  }

  getCurrentMenu(route: RouteLocationNormalizedLoaded) {
    let activeIndex: string | null = null;
    this.menus.value.forEach((m) => {
      m.children?.forEach((c) => {
        if (c.route === route.name) {
          activeIndex = `${m.title}-${c.title}`;
        }
      });
    });
    return activeIndex;
  }

  linkPage(menu: IMenu) {
    this.isExternalLink(menu) ? window.open(menu.path) : router.push({ name: menu.route });
  }

  isExternalLink(menu: IMenu) {
    return !!menu.path;
  }

  toggleState() {
    this.close.value = !this.close.value;
  }

  // 根据路由元数据构建菜单列表
  getMenuByRoute() {
    return router
      .getRoutes()
      .filter((route) => route.children.length && route.meta.menu)
      .map((route) => {
        const menu: IMenu = { ...route.meta?.menu };
        menu.children = route.children
          .filter((route) => route.meta?.menu)
          .map((route) => {
            return { ...route.meta?.menu, route: route.name };
          }) as IMenu[];
        return menu;
      })
      .filter((menu) => menu.children?.length) as IMenu[];
  }
}

export default new Menu();
