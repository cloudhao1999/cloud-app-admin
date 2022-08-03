<script setup lang="ts">
import { CTableColumn } from "#/table";
import { useTable } from "@/hooks/useTable.js";

interface Props {
  columns: CTableColumn<any>[];
  selectionIsNeeded?: boolean;
  tableData: any[];
}
const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  selectionIsNeeded: false,
  tableData: () => []
});

const { computedColumns } = useTable<any>(props.columns);
</script>

<template>
  <div class="w-full">
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
