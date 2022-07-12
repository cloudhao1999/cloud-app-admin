import { createApp } from "vue";
import { setupPlugins } from "./plugins";
import { setupRegisterGlobComp } from "./components";
import { setupRouter } from "@/router";

import "@/style/base.scss";
import App from "./App.vue";

const app = createApp(App);

setupPlugins(app);
setupRegisterGlobComp(app);
await setupRouter(app);

app.mount("#app");
