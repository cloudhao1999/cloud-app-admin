<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import PageView from "./pages/index.vue";

const { t } = useI18n();
</script>
<template>
  <el-container class="h-full w-full font-sans">
    <div class="w-full font-sans h-[250px] bg-gray-200 dark:bg-gray-600 m-1 rounded-lg border">
      <p class="text-dark-200 text-lg m-2 text-center font-bold">
        {{ t("page.common.nested.text.level1") }}
      </p>
      <PageView />
    </div>
  </el-container>
</template>

<style scoped></style>
