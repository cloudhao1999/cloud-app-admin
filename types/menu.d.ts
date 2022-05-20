interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
}

export interface IMenu extends Menu {
  children?: Menu[];
}
