import { useBreakpoints } from "@vueuse/core";
import { useI18n } from "vue-i18n";

export function openNewTab(url: string) {
  window.open(url);
}

export function refreshWindow() {
  window.location.reload();
}

export const fetchRootComputedStyle = (property: string) => {
  return getComputedStyle(document.querySelector(":root")!).getPropertyValue(property);
};

export function useTimeFix() {
  const { t } = useI18n();
  const time = new Date();
  const hour = time.getHours();
  return hour < 9
    ? t("golbal.welcome.message.hello_morning_01")
    : hour <= 11
    ? t("golbal.welcome.message.hello_morning_02")
    : hour <= 13
    ? t("golbal.welcome.message.hello_afternoon_01")
    : hour < 20
    ? t("golbal.welcome.message.hello_afternoon_02")
    : t("golbal.welcome.message.hello_evening");
}

export function useScreenPixel() {
  const breakpoints = useBreakpoints({
    sm: 640,
    md: 768,
    cmd: 766,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  });
  const sm = breakpoints.smaller("sm");
  const md = breakpoints.between("sm", "md");
  const cmd = breakpoints.between("sm", "cmd");
  const gtMd = breakpoints.greater("md");
  const lg = breakpoints.between("md", "lg");
  const xl = breakpoints.between("lg", "xl");
  const xxl = breakpoints.between("xl", "2xl");
  const xxxl = breakpoints["2xl"];

  return {
    sm,
    md,
    cmd,
    gtMd,
    lg,
    xl,
    xxl,
    xxxl
  };
}

/**
 * 获取浏览器存储的语言信息
 * @returns locale from localStorage
 */
export const getLocaleFromStroage = () => {
  return localStorage.getItem("locale") || "zh-CN";
};

/**
 * 获取浏览器存储的主题信息
 * @returns color-scheme from localStorage
 */
export const getColorSchemeFromStroage = () => {
  return localStorage.getItem("vueuse-color-scheme") || "auto";
};
