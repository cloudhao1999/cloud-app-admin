<script setup lang="ts">
const props = defineProps({
  error: String
});
</script>

<template>
  <div v-show="props.error" class="hd-error">
    {{ props.error }}
  </div>
</template>

<style lang="scss" scoped>
.hd-error {
  @apply absolute w-full duration-500 rounded-md bg-red-400 text-white text-xs px-2 py-1 mt-1;
}
</style>
