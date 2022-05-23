<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <i-mdi-white-balance-sunny
    v-show="!isDark"
    class="dark-mode text-gray-500"
    style="font-size: 1.6em"
    @click="() => toggleDark()"
  />
  <i-mdi-weather-night
    v-show="isDark"
    class="dark-mode"
    style="font-size: 1.6em"
    @click="() => toggleDark()"
  />
</template>

<style scoped>
.dark-mode {
  @apply cursor-pointer mx-2 hover:rotate-90 duration-500;
}
</style>
