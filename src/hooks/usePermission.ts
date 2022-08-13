import { refreshWindow } from "@/utils/web";
import { useStorage } from "@vueuse/core";
import { userStore } from "@/store/user";

class Permission {
  public defaultPermission = useStorage<string>("permission", "admin");

  public togglePermission = async () => {
    this.defaultPermission.value = this.defaultPermission.value === "admin" ? "editor" : "admin";
    refreshWindow();
  };

  public hasPermission(value: string): boolean {
    const userState = userStore();
    return userState.roleList!.includes(value);
  }
}

export default new Permission();
