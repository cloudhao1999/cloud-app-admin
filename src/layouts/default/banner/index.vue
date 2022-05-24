<script setup lang="ts">
import menuService from "@/hooks/useMenu";
import { ref } from "vue";

const globalTitle = ref<string>(import.meta.env.VITE_GLOB_APP_TITLE);
</script>

<template>
  <div
    class="flex align-center items-center py-2 w-[220px] cursor-pointer"
    @click="$router.push('/')"
  >
    <div class="w-10 ml-4">
      <img src="../../../assets/img/logo.png" alt="logo" />
    </div>
    <div v-show="!menuService.close.value" class="flex-1 mr-1">
      <span class="text-lg font-bold">{{ globalTitle }}</span>
    </div>
  </div>
</template>

<style scoped></style>
