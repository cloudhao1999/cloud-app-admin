import { IMenu } from "#/menu";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    auth?: boolean;
    guest?: boolean;
    menu?: IMenu;
    keepAlive?: boolean;
    enterClass?: string;
    leaveClass?: string;
    permissions?: string[];
  }
}
