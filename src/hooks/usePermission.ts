import { refreshWindow } from "@/utils/web";
import { useStorage } from "@vueuse/core";

class Permission {
  public defaultPermission = useStorage<string>("permission", "admin");

  public togglePermission = async () => {
    this.defaultPermission.value = this.defaultPermission.value === "admin" ? "editor" : "admin";
    refreshWindow();
  };
}

export default new Permission();
