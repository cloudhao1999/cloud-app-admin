import { App } from "vue";
import AsyncSelect from "./AsyncSelect.vue";
import WangEditor from "./WangEditor.vue";
import CTable from "./Table/src/Table.vue";

export function setupRegisterGlobComp(app: App) {
  app.component("AsyncSelect", AsyncSelect);
  app.component("WangEditor", WangEditor);
  app.component("CTable", CTable);
}
