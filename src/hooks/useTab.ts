import { IMenu } from "#/menu";
import router from "@/router";
import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { useStorage } from "@vueuse/core";
import { CacheEnum } from "@/enum/cacheEnum";

class Tab {
  public history = useStorage<IMenu[]>(CacheEnum.HISTORY_MENU, []);
  public route = ref(null as null | RouteLocationNormalized);

  constructor() {
    this.history.value = this.getHistoryTab();
  }

  removeHistoryTab(menu: IMenu) {
    const index = this.history.value.indexOf(menu);
    this.history.value.splice(index, 1);
  }

  addHistoryTab(route: RouteLocationNormalized) {
    if (!route.meta?.menu) return;
    this.route.value = route;

    const menu: IMenu = { ...route.meta?.menu, route: route.name as string };
    const isHas = this.history.value.some((menu) => menu.route == route.name);
    if (!isHas) this.history.value.unshift(menu);
    if (this.history.value.length > 10) {
      this.history.value.pop();
    }
  }

  private getHistoryTab() {
    const routes = [] as RouteRecordRaw[];
    router.getRoutes().map((r) => routes.push(...r.children));

    return this.history.value.filter((m) => {
      return routes.some((r) => r.name == m.route);
    });
  }
}

export default new Tab();
