<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <Card auto-height>
    <template #title> {{ t("page.about.intro.title") }} </template>
    <template #content>
      <div class="px-5">
        <p class="text-gray-400">
          cloud-app-admin 使用了最新的Vue3.2+ Vite3、Element-Plus、TypeScript、Tailwind
          CSS等主流技术开发，希望能和大家一起学习最新前端技术。
        </p>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
