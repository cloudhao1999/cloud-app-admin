interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
  path?: string;
  iframe_link?: string;
  children?: Menu[];
}

export interface IMenu extends Menu {
  nested?: boolean;
}
