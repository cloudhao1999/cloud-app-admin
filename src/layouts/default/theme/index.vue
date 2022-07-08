<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";

const mode = useColorMode({
  emitAuto: true,
  modes: {
    dark: "dark",
    sky: "sky"
  }
});
const { next, state } = useCycleList(["light", "dark", "sky"], {
  initialValue: mode
});
</script>

<template>
  <i-mdi-white-balance-sunny
    v-show="state === 'light' || state === 'auto' || state === ''"
    class="dark-mode text-gray-500"
    style="font-size: 1.6em"
    @click="() => next()"
  />
  <i-mdi-weather-night
    v-show="state === 'dark'"
    class="dark-mode"
    style="font-size: 1.6em"
    @click="() => next()"
  />
  <i-mdi-apple-icloud
    v-show="state === 'sky'"
    class="dark-mode text-gray-600"
    style="font-size: 1.6em"
    @click="() => next()"
  />
</template>

<style scoped>
.dark-mode {
  @apply cursor-pointer mx-2 hover:rotate-90 duration-500;
}
</style>
