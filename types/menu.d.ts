interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
  path?: string;
  link?: string;
}

export interface IMenu extends Menu {
  children?: Menu[];
}
