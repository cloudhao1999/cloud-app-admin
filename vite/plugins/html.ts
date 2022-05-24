import { createHtmlPlugin } from "vite-plugin-html";

export function setupHtmlPlugin(isBuild: boolean, env: ImportMetaEnv) {
  const { VITE_GLOB_APP_TITLE } = env;

  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE
      }
    }
  });
}
