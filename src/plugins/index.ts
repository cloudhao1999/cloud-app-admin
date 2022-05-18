import { App } from "vue";
import { setupPinia } from "./pinia";
import { setupTailwindcss } from "./tailwindcss";

export function setupPlugins(app: App) {
  setupPinia(app);
  setupTailwindcss();
}
