<script setup lang="ts">
import { useWatermark } from "@/hooks/useWaterMark";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const iniitialText = "Miao Miao 🐱";
const text = ref(iniitialText);
const inputPlaceholder = t("page.watermark.input.placeholder");

const { setWatermark, clear } = useWatermark();
</script>

<template>
  <div class="relative w-full">
    <div class="p-5 absolute w-full">
      <el-space>
        <el-input v-model="text" :placeholder="inputPlaceholder" />
        <el-button type="primary" @click="setWatermark(text)">{{
          t("page.watermark.btn.add")
        }}</el-button>
        <el-button type="primary" @click="setWatermark(iniitialText)">{{
          t("page.watermark.btn.reset")
        }}</el-button>
        <el-button type="danger" @click="clear()">{{ t("page.watermark.btn.delete") }}</el-button>
      </el-space>
    </div>
  </div>
</template>

<style scoped></style>
