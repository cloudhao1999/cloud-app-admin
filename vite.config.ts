import { defineConfig, loadEnv, PluginOption } from "vite";
import dayjs from "dayjs";
import pkg from "./package.json";
import alias from "./vite/alias";

import { parseEnv, sanitizeFileName } from "./vite/util";
import setupPlugins from "./vite/plugins";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ command, mode }) => {
  const isBuild: boolean = command === "build";
  const env = parseEnv(loadEnv(mode, process.cwd()));

  const { dependencies, devDependencies, name, version } = pkg;
  const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
  };

  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()] as PluginOption[],
    resolve: {
      alias,
      extensions: [".ts", ".js", ".vue", ".json"]
    },
    base: isBuild ? "/cloud-app-admin/" : "/",
    build: {
      outDir: "./dist/",
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return id.split("/node_modules/").pop()?.split("/")[0];
            }
          },
          sanitizeFileName
        }
      }
    },
    server: {
      host: true,
      port: env.VITE_PORT,
      proxy: {
        "/api": {
          target: env.VITE_MOCK_ENABLE ? "/" : env.VITE_API_URL,
          changeOrigin: true
        }
      }
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  };
});
