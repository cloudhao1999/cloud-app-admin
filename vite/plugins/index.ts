import { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { setupMockPlugin } from "./mock";
import autoImport from "./autoImport";
import styleImport from "./styleImport";
import { setupUnpluginIcons } from "./icon";
import { setupHtmlPlugin } from "./html";
import { setupI18n } from "./i18n";

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  const plugins: Plugin[] = [vue(), vueJsx()];

  if (env.VITE_MOCK_ENABLE) {
    plugins.push(setupMockPlugin(isBuild));
  }
  plugins.push(setupHtmlPlugin(isBuild, env) as unknown as Plugin);
  autoImport(plugins);
  styleImport(plugins);
  setupI18n(plugins);
  setupUnpluginIcons(plugins);
  return plugins;
}
