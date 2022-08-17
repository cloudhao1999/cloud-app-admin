<script setup lang="ts">
import { CTableColumn } from "#/table";
import { useTable } from "./hooks/useTable.js";
import TableHead from "./components/TableHead.vue";

interface Props {
  columns: CTableColumn<any>[];
  selectionIsNeeded?: boolean;
  tableData: any[];
  showHeader?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  selectionIsNeeded: false,
  tableData: () => [],
  showHeader: false
});

const { computedColumns, columnsRef, filterColumns, moveColumn } = useTable<any>(props.columns);

watchEffect(() => {
  // TODO 为了解决国际化切换和动态列的冲突
  columnsRef.value = columnsRef.value.map((column, index) => {
    const propsColumn = props.columns.find((c) => c.prop === column.prop);

    return {
      ...column,
      width: column.width,
      // initialWidth 用于保存初始传入的width值
      initialWidth: propsColumn?.width as string,
      label: propsColumn?.label,
      show: columnsRef.value[index].show
    };
  });
});
</script>

<template>
  <div class="w-full">
    <table-head
      v-if="props.showHeader"
      :columns="columnsRef"
      :computed-columns="computedColumns"
      :filter-columns="filterColumns"
      :move-column="moveColumn"
    >
      <span class="mr-4 float-right">
        <slot name="options" />
      </span>
    </table-head>
    <el-table :data="props.tableData" v-bind="$attrs">
      <el-table-column
        v-for="(column, index) in computedColumns"
        :key="index + String(column.prop)"
        v-bind="column"
        :min-width="column.minWidth"
      >
        <template v-if="column.scoped" #default="scope">
          <slot :name="column.scoped" :scope="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
