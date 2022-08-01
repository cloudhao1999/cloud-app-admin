<script setup lang="ts">
import { BasicResult } from "#/resultType";
import { useMessage } from "@/hooks/useMessage";
import { http } from "@/utils/http";
import { useI18n } from "vue-i18n";

type OptionsType = {
  label: string;
  value: string;
};
interface Props {
  modelValue: string;
  url: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  url: () => ""
});

const { t } = useI18n();

const emits = defineEmits(["update:modelValue"]);

const dataSource = ref<OptionsType[]>([]);

async function fetchDataList() {
  const res = await http.get<{}, BasicResult<OptionsType[]>>(props.url);
  if (res && res.code === 200) {
    dataSource.value = res.data;
  }
}

function selectChange(value: string) {
  emits("update:modelValue", value);
}

watch(
  () => props.url,
  (val) => {
    if (val) {
      fetchDataList();
    } else {
      useMessage("error", t("page.common.notice.set_url_list"));
      return;
    }
  },
  {
    immediate: true
  }
);
</script>

<template>
  <el-select v-bind="$attrs" :model-value="modelValue" placeholder="Select" @change="selectChange">
    <el-option
      v-for="item in dataSource"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<style scoped></style>
