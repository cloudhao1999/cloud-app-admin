import { useStorage } from "@vueuse/core";
import { setLocalLocale } from "@/plugins/validate/yup";

class I18n {
  public locale = useStorage<string>("locale", "zh-CN");

  public toggleLocale = () => {
    this.locale.value = this.locale.value === "zh-CN" ? "en" : "zh-CN";
    setLocalLocale(this.locale.value);
  };
}

export default new I18n();
