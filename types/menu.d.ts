interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
  path?: string;
  iframe_link?: string;
}

export interface IMenu extends Menu {
  children?: Menu[];
}
