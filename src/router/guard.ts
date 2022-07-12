import { userStore } from "@/store/user";
import { getToken } from "@/utils/auth";
import redirectService from "@/hooks/useRedirect";
import { RouteLocationNormalized, Router } from "vue-router";
import NProgress from "@/utils/progress";
import autoload from "./autoload";

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
    this.router.afterEach(this.afterEach.bind(this));
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    const userState = userStore();
    NProgress.start();

    if (to.meta.auth && !this.token()) {
      redirectService.addRedirect(to.name as unknown as string);
      return { name: "LoginPage" };
    }

    if (from.name === "LoginPage") {
      await autoload(this.router);
    }

    if (this.token() && userState.isEmpty) {
      await userState.getUserInfo();
      await autoload(this.router);
    }

    if (userState.permission) {
      const permissions = to.meta.permissions;
      if (permissions && !permissions.includes(userState.permission)) {
        return { name: "404" };
      }
    }
    if (to.meta.guest && this.token()) return from;
  }

  private async afterEach() {
    NProgress.done();
  }

  private token(): string | null {
    return getToken();
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
