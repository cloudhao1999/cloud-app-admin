<script setup lang="ts">
import { ArrowUp, ArrowDown } from "@element-plus/icons-vue";
import CForm from "@/components/CForm.vue";
import { useI18n } from "vue-i18n";

let already = false;
const expanded = ref(false);
const wrapWidth = ref(0);
const valid = ref(true);
const timer = ref(0);
const minWidth = 300;
const form = ref<InstanceType<typeof CForm>>();
const modelProps = ref<any>({});
const { t } = useI18n();

const cols = computed(() => {
  let cols = Math.floor(wrapWidth.value / minWidth) || 3;
  if (cols > 4) {
    cols = 4;
  }
  if (cols < 1) {
    cols = 1;
  }
  return cols;
});

const showExpandBtn = computed(() => {
  return props.showExpand && expandedOptions.value.length > cols.value;
});

const colSpan = computed(() => {
  const span = 24 / cols.value;
  return { span };
});

const allVisibleItems = computed(() => {
  return props.options.filter((item: any) => !item.hidden);
});

const shrinkedOptions = computed(() => {
  let array = [];
  let lastSpan = colSpan.value.span;
  if (allVisibleItems.value.length < cols.value - 1) {
    lastSpan = ((cols.value - (allVisibleItems.value.length % cols.value)) * 24) / cols.value;
    array = [...allVisibleItems.value];
  } else {
    for (let i = 0; i < allVisibleItems.value.length; i++) {
      const item = allVisibleItems.value[i];
      array.push(item);
      if (array.length >= cols.value - 1) {
        break;
      }
    }
  }
  array.push({
    name: "search",
    scopedSlot: "search",
    colSpan: { span: lastSpan }
  });
  return array;
});

const expandedOptions = computed(() => {
  const lastSpan = ((cols.value - (allVisibleItems.value.length % cols.value)) * 24) / cols.value;
  return [
    ...allVisibleItems.value,
    {
      name: "search",
      scopedSlot: "search",
      colSpan: { span: lastSpan }
    }
  ];
});

const filterOptions = computed<any>(() => {
  if (expanded.value || !props.showExpand) {
    return expandedOptions;
  }
  return shrinkedOptions.value;
});

const emits = defineEmits(["search", "reset"]);

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  model: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  searchDisabled: {
    type: Boolean,
    default: false
  },
  resetDisabled: {
    type: Boolean,
    default: false
  },
  showExpand: {
    type: Boolean,
    default: false
  },
  showReset: {
    type: Boolean,
    default: true
  }
});

const filterWrapRef = ref<HTMLElement>();

function onSubmit(values: any) {
  emits("search", values);
}

function handleSubmit() {
  form.value?.submit();
}

function handleReset() {
  resetFields();
  nextTick(() => {
    emits("reset");
  });
}

function resetFields(...args: any[]) {
  form.value!.resetFields(...args);
}

function handleToggleSearch() {
  expanded.value = !expanded.value;
}

function onResize() {
  if (!valid.value) return;
  valid.value = false;
  timer.value = setTimeout(() => {
    if (filterWrapRef.value) {
      wrapWidth.value = filterWrapRef.value.offsetWidth;
      valid.value = true;
    }
  }, 300) as unknown as number;
}

function handleStart() {
  if (already) return;
  nextTick(() => {
    wrapWidth.value = filterWrapRef.value!.clientWidth;
  });
  window.addEventListener("resize", onResize, false);
}

function handleStop() {
  if (!already) return;
  already = false;
  clearTimeout(timer.value);
  window.removeEventListener("resize", onResize, false);
}

watch(
  () => props.model,
  (val: any) => {
    modelProps.value = val;
  },
  { immediate: true }
);

onMounted(() => {
  handleStart();
});

onDeactivated(() => {
  handleStop();
});
</script>

<template>
  <div ref="filterWrapRef">
    <c-form
      ref="form"
      v-bind="$attrs"
      v-model:value="modelProps"
      :options="filterOptions.value"
      layout="inline"
      :col-span="colSpan"
      :gutter="12"
      @submit="onSubmit"
      @keyup.enter="handleSubmit"
    >
      <template #search>
        <el-space>
          <el-button
            type="primary"
            icon="search"
            :loading="loading"
            :disabled="searchDisabled"
            @click="handleSubmit"
          >
            {{ t("page.common.btn.search") }}
          </el-button>
          <el-button
            v-if="showReset"
            type="primary"
            icon="brush"
            :loading="loading"
            :disabled="resetDisabled"
            @click="handleReset"
          >
            {{ t("page.common.btn.reset") }}
          </el-button>
        </el-space>
        <slot name="extraButtons" :loading="loading" />
        <a v-if="showExpandBtn" @click="handleToggleSearch">
          {{ expanded ? "收起" : "展开" }}
          <el-icon v-show="expanded"><component :is="ArrowUp" /></el-icon>
          <el-icon v-show="!expanded"><component :is="ArrowDown" /></el-icon>
        </a>
      </template>
    </c-form>
  </div>
</template>

<style scoped></style>
