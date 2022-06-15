<script setup lang="ts">
import i18nService from "@/hooks/useI18n";
</script>

<template>
  <div class="relative w-full">
    <div class="p-5 absolute w-full">
      <span class="mr-4 text-gray-600">{{ i18nService.locale }}</span>
      <el-color-picker :model-value="''" style="vertical-align: middle" />
    </div>
  </div>
</template>

<style scoped></style>
