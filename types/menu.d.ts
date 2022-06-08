interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
  path?: string;
}

export interface IMenu extends Menu {
  children?: Menu[];
}
