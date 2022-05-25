import { useStorage } from "@vueuse/core";
import { CacheEnum } from "@/enum/cacheEnum";

class Redirect {
  public redirect = useStorage<string>(CacheEnum.REDIRECT_NAME, null);

  constructor() {}

  addRedirect(name: string) {
    this.redirect.value = name;
  }

  resetRedirect() {
    this.redirect.value = null;
  }
}

export default new Redirect();
