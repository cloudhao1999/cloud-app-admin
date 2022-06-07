<template>
  <el-dialog v-model="visible" :width="dialogWidth" :title="title" @close="cancel">
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
      </span>
    </template>
    <c-form ref="ruleFormRef" v-model:value="model" :options="options" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { ArticleModel } from "@/model/article";
import { useWindowSize } from "@vueuse/core";
import { FormInstance } from "element-plus";
import { computed, ref } from "vue";

const emit = defineEmits(["close"]);

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("新增");
const { width } = useWindowSize();
const model = ref<Partial<ArticleModel>>({});

const dialogWidth = computed(() => {
  return width.value > 768 ? "50%" : "80%";
});

function edit(record: ArticleModel) {
  model.value = Object.assign({}, record);
  visible.value = true;
}

function cancel() {
  ruleFormRef.value?.clearValidate();
  visible.value = false;
}

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      useMessage("success", "提交成功");
      emit("close");
      visible.value = false;
    }
  });
}

const options = [
  {
    name: "title",
    type: "input",
    label: "标题",
    rules: [{ required: true, message: "请输入标题", trigger: "blur" }],
    props: {
      maxLength: 50,
      placeholder: "请输入标题"
    }
  },
  {
    name: "content",
    type: "input",
    label: "内容",
    rules: [{ required: true, message: "请输入内容！", trigger: "blur" }],
    props: {
      autosize: { minRows: 4, maxRows: 8 },
      type: "textarea",
      placeholder: "请输入内容"
    }
  }
];

defineExpose({
  edit,
  title: title
});
</script>
<style scoped></style>
