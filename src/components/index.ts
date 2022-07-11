import { App } from "vue";
import AsyncSelect from "./AsyncSelect.vue";

export function setupRegisterGlobComp(app: App) {
  app.component("AsyncSelect", AsyncSelect);
}
