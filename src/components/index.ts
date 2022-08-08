import { App } from "vue";
import AsyncSelect from "./AsyncSelect.vue";
import CTable from "./Table/src/Table.vue";

export function setupRegisterGlobComp(app: App) {
  app.component("AsyncSelect", AsyncSelect);
  app.component("CTable", CTable);
}
