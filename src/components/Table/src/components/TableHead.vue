<script setup lang="ts">
import TableOption from "./TableOption.vue";
</script>

<template>
  <div class="h-[40px] w-full border-b border-base border-solid">
    <slot name="title" />
    <table-option v-bind="$attrs" />
    <slot />
  </div>
</template>

<style scoped></style>
