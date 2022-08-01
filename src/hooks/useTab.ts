import { IMenu } from "#/menu";
import router from "@/router";
import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { useStorage } from "@vueuse/core";
import { CacheEnum } from "@/enum/cacheEnum";

class Tab {
  public history = useStorage<IMenu[]>(CacheEnum.HISTORY_MENU, []);
  public route = ref(null as null | RouteLocationNormalized);
  public isRouterAlive = ref<boolean>(true);

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

  reload() {
    this.isRouterAlive.value = false;
    nextTick(() => {
      this.isRouterAlive.value = true;
    });
  }

  closeSelf() {
    const menu = this.history.value.find((m) => m.route == this.route.value?.name);
    const length = this.history.value.length;
    if (menu && length > 1) {
      this.removeHistoryTab(menu);
      const prevRouter: IMenu = this.history.value[length - 2];
      router.push({ name: prevRouter.route });
    }
  }

  calcalateHistoryIndex() {
    return this.history.value.findIndex((m) => m.route == this.route.value?.name);
  }

  isTop() {
    return computed(() => this.calcalateHistoryIndex() === 0);
  }

  isBottom() {
    return computed(() => {
      const length = this.history.value.length;
      return this.calcalateHistoryIndex() === length - 1;
    });
  }

  closeLeft() {
    if (!this.isTop().value) {
      const index = this.calcalateHistoryIndex();
      this.history.value.splice(0, index);
    }
  }

  closeRight() {
    if (!this.isBottom().value) {
      const index = this.calcalateHistoryIndex();
      this.history.value.splice(index + 1);
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
