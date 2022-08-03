import { CTableColumn } from "#/table";

export function useTable<T>(column: CTableColumn<T>[]) {
  const columnsRef = ref<CTableColumn<T>[]>(column);

  /**
   * @description: 动态计算列 TODO：用于未来排序与过滤
   */
  const computedColumns = computed(() => {
    return columnsRef.value.filter((column) => column.show);
  });

  return {
    columnsRef,
    computedColumns
  };
}
