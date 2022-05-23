<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <i-mdi-white-balance-sunny
    v-show="!isDark"
    class="cursor-pointer mx-2 text-gray-500"
    style="font-size: 1.6em"
    @click="() => toggleDark()"
  />
  <i-mdi-weather-night
    v-show="isDark"
    class="cursor-pointer mx-2"
    style="font-size: 1.6em"
    @click="() => toggleDark()"
  />
</template>

<style scoped></style>
