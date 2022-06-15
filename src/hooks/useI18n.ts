import { useStorage } from "@vueuse/core";

class I18n {
  public locale = useStorage<string>("locale", "zh-CN");

  public toggleLocale = () => {
    this.locale.value = this.locale.value === "zh-CN" ? "en" : "zh-CN";
  };
}

export default new I18n();
