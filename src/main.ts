import { createApp } from "vue";
import { setupPlugins } from "./plugins";
import { setupRegisterGlobComp } from "./components";
import { setupRouter } from "@/router";

import "@/style/base.scss";
import App from "./App.vue";

const app = createApp(App);

/**
 * 初始化事件
 */
async function setupSynchronized() {
  setupPlugins(app);
  setupRegisterGlobComp(app);
  await setupRouter(app);
}

setupSynchronized().then(() => {
  app.mount("#app");
});
