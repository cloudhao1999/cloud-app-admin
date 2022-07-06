import { fetchAdminInfo, fetchEditorInfo, ILoginForm, userLogin } from "@/api/user";
import permissionService from "@/hooks/usePermission";
import { UserInfoModel } from "@/model/user";
import { setToken } from "@/utils/auth";
import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      info: {} as null | UserInfoModel
    };
  },
  getters: {
    name: (state) => {
      return state.info?.name;
    },
    avatar: (state) => {
      return state.info?.avatar;
    },
    isEmpty: (state) => {
      return Object.keys(state.info!).length === 0;
    },
    permission: (state) => {
      return state.info?.permission;
    }
  },
  actions: {
    async getUserInfo() {
      const permissions = permissionService.defaultPermission;
      let data;
      if (permissions.value === "admin") {
        ({ data } = await fetchAdminInfo());
      } else {
        ({ data } = await fetchEditorInfo());
      }
      if (data) {
        this.$state.info = data;
      }
    },
    async login(loginParam: ILoginForm, success: () => void, error: (err: any) => void) {
      try {
        const {
          data: { token }
        } = await userLogin(loginParam);
        if (token) {
          setToken(token);
          await this.getUserInfo();
          success();
        } else {
          throw "获取token失败";
        }
      } catch (err) {
        error(err);
      }
    }
  }
});
