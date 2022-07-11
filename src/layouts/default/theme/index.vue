<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme";

const { next, state } = useTheme();
</script>

<template>
  <div style="font-size: 1.6em" @click="() => next()">
    <i-mdi-white-balance-sunny
      v-show="state === 'light' || state === 'auto' || state === ''"
      class="dark-mode text-gray-500"
    />
    <i-mdi-weather-night v-show="state === 'dark'" class="dark-mode" />
    <i-mdi-apple-icloud v-show="state === 'sky'" class="dark-mode text-gray-600" />
  </div>
</template>

<style scoped>
.dark-mode {
  @apply cursor-pointer mx-2 hover:rotate-90 duration-500;
}
</style>
