import { createApp } from "vue";
import { setupPlugins } from "./plugins";
import { setupRegisterGlobComp } from "./components";
import { setupRouter } from "@/router";
import AsyncSelect from "@/components/AsyncSelect.vue";

import "@/style/base.scss";
import App from "./App.vue";

const app = createApp(App);
app.component("AsyncSelect", AsyncSelect);

setupPlugins(app);
setupRegisterGlobComp(app);
setupRouter(app);

app.mount("#app");
