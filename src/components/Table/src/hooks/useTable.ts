import { CTableColumn } from "#/table";
import { CheckboxValueType } from "element-plus";

export function useTable<T>(column: CTableColumn<T>[]) {
  const columnsRef = ref<CTableColumn<T>[]>(column);

  /**
   * @description: 动态计算列
   */
  const computedColumns = computed(() => {
    return columnsRef.value.filter((column) => column.show);
  });

  /**
   * 动态增减列
   * @param columns : 列数据 ;
   */
  function filterColumns(columns: CheckboxValueType[]) {
    columnsRef.value = columnsRef.value.map((column) => {
      if (columns.includes(column.prop!)) {
        column.show = true;
      } else {
        column.show = false;
      }
      return column;
    });
  }

  return {
    columnsRef,
    computedColumns,
    filterColumns
  };
}
