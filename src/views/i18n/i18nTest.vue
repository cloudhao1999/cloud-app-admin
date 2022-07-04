<script setup lang="ts">
import i18nService from "@/hooks/useI18n";

const color = ref("#fff");
</script>

<template>
  <div class="relative w-full">
    <div class="p-5 absolute w-full">
      <span class="mr-4 text-gray-600">{{ i18nService.locale }}</span>
      <el-color-picker v-model="color" style="vertical-align: middle" />
      <p class="mt-2 mr-4 text-gray-600">{{ color }}</p>
    </div>
  </div>
</template>

<style scoped></style>
