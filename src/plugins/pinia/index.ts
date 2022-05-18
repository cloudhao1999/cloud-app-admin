import { App } from "vue";
import { createPinia } from "pinia";

export function setupPinia(app: App) {
  app.use(createPinia());
}
