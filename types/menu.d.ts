interface Menu {
  title?: string;
  icon?: string;
  isClick?: boolean;
  route?: string;
  path?: string;
  iframe_link?: string;
  children?: Menu[];
  hideParent?: boolean;
}

export interface IMenu extends Menu {
  nested?: boolean;
}
