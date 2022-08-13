import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
export type columnType = {
  prop: string;
  label: string;
  minWidth?: number;
  scoped?: string;
  showOverflowTooltip?: boolean;
  fixed?: string;
  width?: string;
};

export type CTableColumn<T> = Partial<TableColumnCtx<T>> & {
  scoped?: string;
  show?: boolean;
  locked?: boolean;
  initialWidth?: string;
};
