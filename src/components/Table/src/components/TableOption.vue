<script setup lang="ts">
import { CTableColumn } from "#/table.js";
import { CheckboxValueType } from "element-plus";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const modelValue = ref<string[]>([]);

interface Props {
  columns: CTableColumn<any>[];
  computedColumns: CTableColumn<any>[];
  filterColumns: (columns: CheckboxValueType[]) => void;
}
const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  computedColumns: () => [],
  filterColumns: () => {}
});

watch(
  props.computedColumns,
  (value) => {
    modelValue.value = value.filter((v) => v.show).map((v) => v.prop) as string[];
  },
  {
    immediate: true
  }
);
</script>

<template>
  <div class="w-[40px] h-full float-right pr-8">
    <el-popover placement="bottom" :width="200" trigger="click">
      <template #reference>
        <el-button icon="menu" circle />
      </template>
      <el-checkbox-group v-model="modelValue" @change="filterColumns">
        <div class="flex flex-col">
          <el-checkbox
            v-for="column in props.columns"
            :key="column.prop"
            :disabled="column.locked"
            :label="column.prop"
          >
            <div class="flex">
              {{ column.label ?? t("page.common.table.column.selection") }}
            </div>
          </el-checkbox>
        </div>
      </el-checkbox-group>
    </el-popover>
  </div>
</template>

<style scoped></style>
