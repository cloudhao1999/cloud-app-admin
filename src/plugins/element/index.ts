import { App } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/style/dark/css-vars.css";
import ElementPlus from "element-plus";

export function setupElementIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

export function setupElementPlus(app: App) {
  app.use(ElementPlus, {
    locale: zhCn
  });
}
