import { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import { setupMockPlugin } from "./mock";

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  const plugins: Plugin[] = [vue()];
  if (env.VITE_MOCK_ENABLE) {
    plugins.push(setupMockPlugin(isBuild));
  }
  return plugins;
}
