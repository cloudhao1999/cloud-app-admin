import { App } from "vue";
import { setupElementIcons } from "./element";
import { setupPinia } from "./pinia";
import { setupTailwindcss } from "./tailwindcss";
import { setUpTable } from "./vxe-table";

export function setupPlugins(app: App) {
  setupPinia(app);
  setUpTable(app);
  setupElementIcons(app);
  setupTailwindcss();
}
