import { App } from "vue";
import { setupEcharts } from "./echarts";
import { setupElementIcons, setupElementPlus } from "./element";
import { setupPinia } from "./pinia";
import { setupTailwindcss } from "./tailwindcss";
import { setUpTable } from "./vxe-table";

export function setupPlugins(app: App) {
  setupPinia(app);
  setUpTable(app);
  setupEcharts(app);
  setupElementIcons(app);
  setupElementPlus(app);
  setupTailwindcss();
}
