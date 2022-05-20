import { IMenu } from "#/menu";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    auth?: boolean;
    guest?: boolean;
    menu?: IMenu;
    enterClass?: string;
    leaveClass?: string;
    permission?: string;
  }
}
