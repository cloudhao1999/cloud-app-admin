import { Plugin } from "vite";
import { createStyleImportPlugin } from "vite-plugin-style-import";

export default function styleImport(plugins: Plugin[]) {
  plugins.push(
    createStyleImportPlugin({
      libs: [
        {
          libraryName: "vxe-table",
          esModule: true,
          resolveStyle: (name) => `vxe-table/es/${name}/style.css`
        }
      ]
    })
  );
}
