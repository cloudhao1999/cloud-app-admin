import { App, Component } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/style/dark/css-vars.css";
import "@/style/sky/css-vars.css";
import ElementPlus from "element-plus";

export function setupElementIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component as unknown as Component);
  }
}

export function setupElementPlus(app: App) {
  app.use(ElementPlus);
}
