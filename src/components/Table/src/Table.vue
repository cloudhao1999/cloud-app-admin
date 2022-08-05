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

const { computedColumns, columnsRef, filterColumns } = useTable<any>(props.columns);
watchEffect(() => {
  // TODO 为了解决国际化切换和动态列的冲突
  columnsRef.value = props.columns.map((column, index) => {
    return {
      ...column,
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
    />
    <el-table :data="props.tableData" v-bind="$attrs">
      <el-table-column
        v-for="column in computedColumns"
        :key="column.prop"
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
