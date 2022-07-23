<script setup lang="ts">
import { useFullScreen } from "@/hooks/useFullScreen";

const { isFullScreen, fullScreen } = useFullScreen();
</script>

<template>
  <i-mdi-fullscreen
    v-show="!isFullScreen"
    class="fullscreen"
    style="font-size: 1.6em"
    @click="() => fullScreen()"
  />
  <i-mdi-fullscreen-exit
    v-show="isFullScreen"
    class="fullscreen"
    style="font-size: 1.6em"
    @click="() => fullScreen()"
  />
</template>

<style lang="scss" scoped>
.fullscreen {
  @apply cursor-pointer text-gray-500 mx-1 hover:text-gray-800 duration-500;
}

@media screen and (max-width: 768px) {
  .fullscreen {
    display: none;
  }
}
</style>
