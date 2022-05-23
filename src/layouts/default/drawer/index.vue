<script setup lang="ts">
import menuService from "@/hooks/useMenu";
</script>

<template>
  <div class="pr-3 cursor-pointer" @click="menuService.toggleState">
    <i-mdi-format-indent-decrease
      :class="{ 'rotate-180': menuService.close.value }"
      class="duration-300"
      style="font-size: 1.5em"
    />
  </div>
</template>

<style scoped></style>
