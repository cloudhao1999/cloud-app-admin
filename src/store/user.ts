import { fetchUserInfo, ILoginForm, userLogin } from "@/api/user";
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
    }
  },
  actions: {
    async getUserInfo() {
      return await fetchUserInfo();
    },
    async login(loginParam: ILoginForm, success: () => void, error: (err: any) => void) {
      try {
        const {
          data: { token }
        } = await userLogin(loginParam);
        if (token) {
          setToken(token);
          const { data } = await this.getUserInfo();
          if (data) {
            this.$state.info = data;
            success();
          } else {
            throw "获取用户信息失败";
          }
        } else {
          throw "获取token失败";
        }
      } catch (err) {
        error(err);
      }
    }
  }
});
