import { App } from "vue";
import { setupEcharts } from "./echarts";
import { setupElementIcons, setupElementPlus } from "./element";
import { setupI18n } from "./i18n";
import { setupPinia } from "./pinia";
import { setupTailwindcss } from "./tailwindcss";
import { setUpTable } from "./vxe-table";

export function setupPlugins(app: App) {
  setupPinia(app);
  setUpTable(app);
  setupEcharts(app);
  setupI18n(app);
  setupElementIcons(app);
  setupElementPlus(app);
  setupTailwindcss();
}
