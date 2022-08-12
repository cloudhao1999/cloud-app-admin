<script setup lang="ts">
import TableOption from "./TableOption.vue";
</script>

<template>
  <div class="h-[40px] w-full border-b border-base border-solid">
    <slot name="title" />
    <slot />
    <table-option v-bind="$attrs" />
  </div>
</template>

<style scoped></style>
