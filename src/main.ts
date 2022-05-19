import { createApp } from "vue";
import { setupPlugins } from "./plugins";
import { setupRouter } from "@/router";

import "@/style/base.scss";
import App from "./App.vue";

const app = createApp(App);

setupPlugins(app);
setupRouter(app);

app.mount("#app");
