<script setup lang="ts">
import { CTableColumn } from "#/table";
import { CheckboxValueType } from "element-plus";
import { useI18n } from "vue-i18n";

const modelValue = ref<string[]>([]);
const { t } = useI18n();

interface Props {
  columns: CTableColumn<any>[];
  computedColumns: CTableColumn<any>[];
  filterColumns: (columns: CheckboxValueType[]) => void;
  moveColumn: (index: number, sort: "ASC" | "DESC") => void;
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  computedColumns: () => [],
  filterColumns: () => {},
  moveColumn: () => {}
});

const calculateTop = () => {
  return props.columns.findIndex((column) => column.type === "selection") + 1;
};

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
      <div class="flex justify-between">
        <el-checkbox-group v-model="modelValue" @change="filterColumns">
          <div class="flex flex-col">
            <el-checkbox
              v-for="column in props.columns"
              :key="column.prop"
              :disabled="column.locked"
              :label="column.prop"
            >
              {{ column.label ?? t("page.common.table.column.selection") }}
            </el-checkbox>
          </div>
        </el-checkbox-group>
        <div class="flex flex-col">
          <div v-for="(column, index) in props.columns" :key="column.prop" class="flex mt-2 h-6">
            <i-mdi-arrow-up-drop-circle-outline
              v-show="index !== calculateTop() && index !== calculateTop() - 1"
              class="hover:text-blue-500 cursor-pointer"
              style="font-size: 1em"
              @click="moveColumn(index, 'DESC')"
            />
            <i-mdi-arrow-down-drop-circle-outline
              v-show="index < props.columns.length - 1 && index !== calculateTop() - 1"
              class="hover:text-blue-500 cursor-pointer"
              style="font-size: 1em"
              @click="moveColumn(index, 'ASC')"
            />
          </div>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<style scoped></style>
