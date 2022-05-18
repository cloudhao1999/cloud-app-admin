import { App } from "vue";
import { setupPinia } from "./pinia";
import { setupTailwindcss } from "./tailwindcss";
import { setUpTable } from "./vxe-table";

export function setupPlugins(app: App) {
  setupPinia(app);
  setUpTable(app);
  setupTailwindcss();
}
