<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { ArticleModel } from "@/model/article";
import { useWindowSize } from "@vueuse/core";
import { FormInstance } from "element-plus";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
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
      useMessage("success", t("page.common.notice.submit_success"));
      emit("close");
      visible.value = false;
    }
  });
}

const options = computed(() => {
  return [
    {
      name: "title",
      type: "input",
      label: t("page.common.design.article.form.title"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.title_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.design.article.form.title_placeholder")
      }
    },
    {
      name: "content",
      type: "input",
      label: t("page.common.design.article.form.content"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.content_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        autosize: { minRows: 4, maxRows: 8 },
        type: "textarea",
        placeholder: t("page.common.design.article.form.content_placeholder")
      }
    }
  ];
});

defineExpose({
  edit,
  title: title
});
</script>
<template>
  <el-dialog v-model="visible" :width="dialogWidth" :title="title" @close="cancel">
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ t("page.common.btn.cancel") }}</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">{{
          t("page.common.btn.confirm")
        }}</el-button>
      </span>
    </template>
    <c-form ref="ruleFormRef" v-model:value="model" label-width="80px" :options="options" />
  </el-dialog>
</template>

<style scoped></style>
