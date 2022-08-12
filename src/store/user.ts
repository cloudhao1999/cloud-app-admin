import { fetchAdminInfo, fetchEditorInfo, ILoginForm, userLogin } from "@/api/user";
import permissionService from "@/hooks/usePermission";
import { UserInfoModel } from "@/model/user";
import { setToken } from "@/utils/auth";
import { defineStore } from "pinia";

export const userStore = defineStore("user", () => {
  const info = ref<Partial<UserInfoModel>>({});

  const name = computed(() => {
    return info.value!.name;
  });
  const avatar = computed(() => {
    return info.value!.avatar;
  });
  const isEmpty = computed(() => {
    return Object.keys(info.value!).length === 0;
  });
  const permission = computed(() => {
    return info.value?.permission;
  });
  const roleList = computed(() => {
    return info.value?.roleList;
  });

  async function getUserInfo() {
    const permissions = permissionService.defaultPermission;
    let data;
    if (permissions.value === "admin") {
      ({ data } = await fetchAdminInfo());
    } else {
      ({ data } = await fetchEditorInfo());
    }
    if (data) {
      info.value = data;
    }
  }
  async function login(loginParam: ILoginForm, success: () => void, error: (err: any) => void) {
    try {
      const {
        data: { token }
      } = await userLogin(loginParam);
      if (token) {
        setToken(token);
        await getUserInfo();
        success();
      } else {
        throw "获取token失败";
      }
    } catch (err) {
      error(err);
    }
  }

  return {
    info,
    name,
    avatar,
    isEmpty,
    permission,
    roleList,
    login,
    getUserInfo
  };
});
