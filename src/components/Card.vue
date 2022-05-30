<script setup lang="ts">
const props = defineProps({
  empty: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="p-2 w-full">
    <div class="shadow-lg shadow-dark-200 card-box">
      <div
        :class="props.empty ? '' : 'border-b h-[60px] pt-5'"
        class="border-gray-200 border-solid"
      >
        <div class="flex justify-between items-center">
          <span class="ml-5 text-gray-500 text-lg font-bold">
            <slot name="title"></slot>
          </span>
          <div class="mr-5">
            <slot name="actions"></slot>
          </div>
        </div>
        <div class="my-3">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-box {
  @apply h-[330px] rounded-xl border  dark:border-solid;
}
</style>
