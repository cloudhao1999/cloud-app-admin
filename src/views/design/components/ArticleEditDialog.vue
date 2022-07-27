<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { ArticleModel } from "@/model/article";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";
import { articleUrl } from "../modules/design";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const { handleEdit, handleAdd } = useSimpleList<ArticleModel>(articleUrl) as SimpleListType;

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<ArticleModel>>({});
const isEdit = computed<boolean>(() => {
  return model.value.id !== undefined;
});

const dialogWidth = computed(() => {
  return gtMd.value ? "50%" : "80%";
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
      if (isEdit.value) {
        handleEdit(model.value).then(() => {
          useMessage("success", t("page.common.notice.edit_success"));
          emit("close");
          visible.value = false;
        });
      } else {
        handleAdd(model.value).then(() => {
          useMessage("success", t("page.common.notice.add_success"));
          emit("close");
          visible.value = false;
        });
      }
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
    },
    {
      name: "type",
      label: t("page.common.design.article.form.type"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.type_placeholder"),
          trigger: "blur"
        }
      ],
      scopedSlot: "type"
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
    <c-form ref="ruleFormRef" v-model:value="model" label-width="80px" :options="options">
      <template #type>
        <el-radio-group v-model="model.type" class="ml-4">
          <el-radio label="history" size="large">历史</el-radio>
          <el-radio label="literature" size="large">文学</el-radio>
          <el-radio label="technology" size="large">科技</el-radio>
        </el-radio-group>
      </template>
    </c-form>
  </el-dialog>
</template>

<style scoped></style>
