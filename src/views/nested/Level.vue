<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="m-3 p-3 bg-gray-300 dark:bg-gray-800 h-[180px] rounded-lg border">
    <p class="font-medium text-center">{{ t("page.common.nested.text.level2") }}</p>
  </div>
</template>

<style scoped></style>
