<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import { ElForm } from "element-plus";

const types: Record<string, string> = {
  input: "el-input",
  select: "el-select",
  inputNumber: "el-input-number",
  timePicker: "el-time-picker",
  datePicker: "el-date-picker"
};

const inputTypes = ["el-input", "el-input-number"];

const props = defineProps({
  options: {
    type: Array,
    require: true
  },
  gutter: {
    type: Number,
    default: 24
  },
  colSpan: {
    type: Object,
    require: false
  },
  value: {
    type: Object,
    require: true,
    default: () => {}
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(["submit", "update:value"]);
const formRef = ref<InstanceType<typeof ElForm>>();
const validatorRules = ref({});
const formData = ref<any[]>([]);
const modelProps = ref<any>({});

watch(
  () => props.options as any[],
  (val) => {
    const validatorRulesObj: any = {};
    formData.value = val.map((item) => {
      let { name, type, rules, tagName, ...rest } = item;
      if (rules) {
        validatorRulesObj[name] = rules;
      }
      if (types[type] && !tagName) {
        tagName = types[type];
      }
      return {
        ...rest,
        name,
        tagName
      };
    });
    validatorRules.value = validatorRulesObj;
  },
  { immediate: true }
);

const computedColSpan = computed(() => {
  const defaultColSpan =
    props.options && props.options.length > 10 ? { md: 12, xs: 24 } : { span: 24 };
  return props.colSpan || defaultColSpan;
});

async function submit() {
  await formRef.value?.validate((valid: boolean) => {
    if (valid) {
      const values = props.value;
      emits("submit", values);
    }
  });
}

function validateField(...args: any[]) {
  formRef.value?.validateField(...args);
}
function validate(...args: any[]) {
  formRef.value?.validate(...args);
}
function resetFields(...args: any[]) {
  formRef.value?.resetFields(...args);
}
function clearValidate(...args: any[]) {
  formRef.value?.clearValidate(...args);
}
defineExpose({
  validateField,
  validate,
  resetFields,
  clearValidate,
  submit
});

watch(
  () => props.value,
  (val: any) => {
    modelProps.value = val;
  },
  { immediate: true }
);

watchEffect(() => {
  emits("update:value", modelProps.value);
});
</script>

<template>
  <div v-loading="loading">
    <el-form ref="formRef" :rules="validatorRules" :model="value" v-bind="$attrs">
      <el-row :gutter="gutter">
        <template v-for="(item, index) in formData" :key="index">
          <el-col v-if="!item.hidden" v-bind="item.colSpan || computedColSpan" :key="item.name">
            <el-form-item :prop="item.name" :label="item.label" v-bind="item.itemExtra">
              <template v-if="item.scopedSlot && $slots[item.scopedSlot]">
                <slot :name="item.scopedSlot" :value="value" :option="item" />
              </template>
              <template v-else-if="item.tagName">
                <template v-if="inputTypes.includes(item.tagName)">
                  <component
                    :is="item.tagName"
                    v-model.trim="modelProps[item.name]"
                    v-bind="item.props"
                    v-on="item.on ?? {}"
                  />
                </template>
                <template v-else>
                  <component
                    :is="item.tagName"
                    v-model="modelProps[item.name]"
                    v-bind="item.props"
                    v-on="item.on ?? {}"
                  />
                </template>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped></style>
