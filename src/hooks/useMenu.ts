import { IMenu } from "#/menu";
import { ref } from "vue";
import router from "@/router";

class Menu {
  public menus = ref<IMenu[]>([]);

  constructor() {
    this.menus.value = this.getMenuByRoute();
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
