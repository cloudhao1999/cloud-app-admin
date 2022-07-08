import { useColorMode, useCycleList } from "@vueuse/core";

const mode = useColorMode({
  modes: {
    light: "light",
    dark: "dark",
    sky: "sky"
  }
});

const { next, state } = useCycleList(["light", "dark", "sky"], {
  initialValue: mode
});

export function useTheme() {
  return {
    next,
    state
  };
}
