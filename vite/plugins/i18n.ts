import { Plugin } from "vite";
import { resolve } from "path";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

export function setupI18n(plugins: Plugin[]) {
  plugins.push(
    VueI18n({
      include: [resolve(__dirname, "../../locales/**")]
    })
  );
}
