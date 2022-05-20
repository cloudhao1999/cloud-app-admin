import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import autoload from "./autoload";
import guard from "./guard";
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes]
});

export async function setupRouter(app: App) {
  autoload(router);
  guard(router);
  app.use(router);
}

export default router;
