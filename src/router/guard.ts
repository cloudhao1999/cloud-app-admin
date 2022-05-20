import { userStore } from "@/store/user";
import { getToken } from "@/utils/auth";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    const userState = userStore();
    if (to.meta.auth && !this.token()) {
      return { name: "login" };
    }
    if (this.token()) {
      await userState.getUserInfo();
    }

    if (to.meta.guest && this.token()) return from;
  }

  private token(): string | null {
    return getToken();
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
