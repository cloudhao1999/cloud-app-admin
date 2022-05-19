import { Plugin } from "vite";
import Icons from "unplugin-icons/vite";

export function setupUnpluginIcons(plugins: Plugin[]) {
  plugins.push(
    Icons({
      autoInstall: true
    })
  );
}
