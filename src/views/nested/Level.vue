<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="m-2 p-2 bg-gray-300 dark:bg-gray-800 h-[180px] rounded-lg border">
    <span class="font-medium">{{ t("page.common.nested.text.level2") }}</span>
  </div>
</template>

<style scoped></style>
