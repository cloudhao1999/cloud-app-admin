<script setup lang="ts">
import menuService from "@/hooks/useMenu";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const globalTitle = computed(() => {
  return t("global_title");
});
</script>

<template>
  <div
    class="flex align-center items-center py-2 w-[220px] cursor-pointer"
    @click="$router.push('/')"
  >
    <div class="w-10 ml-4">
      <img src="../../../assets/img/logo.webp" alt="logo" />
    </div>
    <div v-show="!menuService.close.value" class="flex-1 duration-500 ml-2 mr-1 w-[160px]">
      <span class="text-base font-bold">{{ globalTitle }}</span>
    </div>
  </div>
</template>

<style scoped></style>
