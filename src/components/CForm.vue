<script setup lang="ts">
import { isArray } from "@/utils/is";
import { ElForm } from "element-plus";

const types: Record<string, string> = {
  input: "el-input",
  select: "el-select",
  inputNumber: "el-input-number",
  timePicker: "el-time-picker",
  datePicker: "el-date-picker",
  richText: "WangEditor"
};

const inputTypes = ["el-input", "el-input-number", "async-select"];

type CFormChildOptions = Omit<CFormOptions, "rules" | "children">;

type CFormOptions = {
  label: string;
  name: string;
  type?: string;
  tagName?: string;
  props?: any;
  rules?: any;
  scopedSlot?: string;
  itemExtra?: any;
  colSpan?: any; // 参照 ElCol 的 属性
  hidden?: boolean;
  on?: any;
  children?: CFormChildOptions[];
};

interface CFormProps {
  options: CFormOptions[];
  gutter?: number;
  colSpan?: { span: number };
  value: any;
  loading?: boolean;
}

const props = withDefaults(defineProps<CFormProps>(), {
  options: () => [],
  gutter: 24,
  value: {},
  loading: false
});

const emits = defineEmits(["submit", "update:value"]);
const formRef = ref<InstanceType<typeof ElForm>>();
const validatorRules = ref({});
const formData = ref<CFormOptions[]>([]);
const modelProps = ref<any>({});

const filterChildrenOption = (children: any[]) => {
  return children.map((item) => {
    let { name, type, tagName, ...rest } = item;

    if (types[type] && !tagName) {
      tagName = types[type];
    }
    return {
      ...rest,
      name,
      tagName
    };
  });
};

watch(
  () => props.options,
  (val) => {
    const validatorRulesObj: any = {};
    formData.value = val.map((item) => {
      let { name, type, children, rules, tagName, ...rest } = item;

      if (rules) {
        validatorRulesObj[name] = rules;
      }
      if (type && types[type] && !tagName) {
        tagName = types[type];
      }
      if (children && isArray(children)) {
        children = filterChildrenOption(children);
      }

      return {
        ...rest,
        name,
        tagName,
        children
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
                <template v-else-if="item.children">
                  <component
                    :is="item.tagName"
                    v-model.trim="modelProps[item.name]"
                    v-bind="item.props"
                    v-on="item.on ?? {}"
                  >
                    <template v-for="(child, cIndex) in item.children" :key="cIndex">
                      <component :is="child.tagName" v-bind="child.props" v-on="child.on ?? {}" />
                    </template>
                  </component>
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
