<template>
  <el-dialog v-model="visible" :width="dialogWidth" :title="title">
    <el-form ref="ruleFormRef" :rules="rules" :model="model">
      <el-form-item label="标题" prop="title" :label-width="formLabelWidth">
        <el-input v-model="model.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="内容" prop="content" :label-width="formLabelWidth">
        <el-input v-model="model.content" :autosize="{ minRows: 4, maxRows: 8 }" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { ArticleModel } from "@/model/article";
import { useWindowSize } from "@vueuse/core";
import { FormInstance, FormRules } from "element-plus";
import { computed, reactive, ref } from "vue";

const emit = defineEmits(["close"]);

const visible = ref(false);
const formLabelWidth = "80px";
const ruleFormRef = ref<FormInstance>();
const title = ref("新增");
const { width } = useWindowSize();
const model = ref<Partial<ArticleModel>>({});
const rules = reactive<FormRules>({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  content: [{ required: true, message: "请输入内容", trigger: "blur" }]
});

const dialogWidth = computed(() => {
  return width.value > 768 ? "50%" : "80%";
});

function edit(record: ArticleModel) {
  model.value = Object.assign({}, record);
  visible.value = true;
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
defineExpose({
  edit,
  title: title
});
</script>
<style scoped></style>
