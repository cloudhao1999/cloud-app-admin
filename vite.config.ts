import { defineConfig, loadEnv } from "vite";
import alias from "./vite/alias";

import { parseEnv } from "./vite/util";
import setupPlugins from "./vite/plugins";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ command, mode }) => {
  const isBuild = command === "build";
  const env = parseEnv(loadEnv(mode, process.cwd()));

  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias,
      extensions: [".ts", ".js", ".vue", ".json"]
    },
    build: {
      outDir: "./dist/",
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return id.split("/node_modules/").pop()?.split("/")[0];
            }
          }
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
    }
  };
});
