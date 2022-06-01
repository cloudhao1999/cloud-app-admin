<template>
  <el-dialog v-model="visible" :width="dialogWidth" :title="title">
    <el-form :model="model">
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-input v-model="model.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="内容" :label-width="formLabelWidth">
        <el-input v-model="model.content" :autosize="{ minRows: 4, maxRows: 8 }" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ArticleModel } from "@/model/article";
import { useWindowSize } from "@vueuse/core";
import { computed, ref } from "vue";

const visible = ref(false);
const formLabelWidth = "80px";
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
defineExpose({
  edit,
  title: title
});
</script>
<style scoped></style>
