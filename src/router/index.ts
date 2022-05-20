import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import autoload from "./autoload";
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes]
});

export async function setupRouter(app: App) {
  app.use(router);
  autoload(router);
}

export default router;
