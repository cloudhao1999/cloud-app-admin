import { CTableColumn } from "#/table";
import { CheckboxValueType } from "element-plus";

export function useTable<T>(column: CTableColumn<T>[]) {
  const columnsRef = ref<CTableColumn<T>[]>(column);

  /**
   * @description 统计不包含宽度的列
   */
  const noWidthColumns = computed(() => {
    return columnsRef.value.filter((column) => !column.initialWidth).map((c) => c.prop);
  });

  /**
   * 判断剩下的列是否都有宽度，element-table通常会自动计算宽度，但是如果手动设置宽度，则不会自动计算
   * @param columns 选择要展示的列
   * @returns 布尔值，是否都有宽度
   */
  const isAllColumnsHaveWidth = (columns: CheckboxValueType[]): boolean => {
    return columns.every((column) => !noWidthColumns.value.includes(column as string));
  };

  /**
   * @description: 动态计算列
   */
  const computedColumns = computed(() => {
    return columnsRef.value.filter((column) => column.show);
  });

  /**
   * 动态增减列
   * @param columns: 列数据
   */
  function filterColumns(columns: CheckboxValueType[]) {
    const widthExist = isAllColumnsHaveWidth(columns);

    columnsRef.value = columnsRef.value.map((column) => {
      // 判断剩下的列是否都有宽度，如果全部写死，则重新计算宽度
      // TODO：根据内容自适应宽度
      column.width = widthExist ? undefined : column.initialWidth;

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
   * @param index 列索引
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
