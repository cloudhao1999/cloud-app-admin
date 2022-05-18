import { viteMockServe } from "vite-plugin-mock";
export function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    mockPath: "mock",
    localEnabled: !isBuild
  });
}
