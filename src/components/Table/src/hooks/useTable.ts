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

  /**
   * 排序列
   * @param index 列索引 ;
   * @param sort 上下移动标识
   */
  function moveColumn(index: number, sort: "ASC" | "DESC") {
    const columns = columnsRef.value;
    const column = columns[index];
    const targetIndex = sort === "ASC" ? index + 1 : index - 1;
    const targetColumn = columns[targetIndex];
    if (targetColumn) {
      columns.splice(index, 1);
      columns.splice(targetIndex, 0, column);
      columnsRef.value = columns;
    }
  }

  return {
    columnsRef,
    computedColumns,
    filterColumns,
    moveColumn
  };
}
