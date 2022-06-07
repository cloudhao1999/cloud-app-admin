<script setup lang="ts">
import { CTableColumn } from "#/table";

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
</script>

<template>
  <div class="w-full">
    <el-table :data="props.tableData" v-bind="$attrs">
      <el-table-column
        v-for="column in props.columns"
        :key="column.prop"
        v-bind="column"
        :min-width="column.minWidth"
      >
        <template v-if="column.scoped" #default="scope">
          <slot :name="column.scoped" v-bind="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
