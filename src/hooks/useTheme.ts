import { getColorSchemeFromStroage } from "@/utils/web";
import { useColorMode, useCycleList, usePreferredDark } from "@vueuse/core";

const mode = useColorMode({
  modes: {
    sky: "sky"
  }
});

const preferredDark = usePreferredDark();
const color = getColorSchemeFromStroage();
if (preferredDark.value && color === "auto") {
  mode.value = "dark";
}

const { next, state } = useCycleList<any>(["light", "dark", "sky"], {
  initialValue: mode
});

export function useTheme() {
  return {
    next,
    state
  };
}
