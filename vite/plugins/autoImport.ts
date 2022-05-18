import { Plugin } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function autoImport(plugins: Plugin[]) {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()]
    })
  );
}
