<script setup lang="ts">
const props = defineProps({
  empty: {
    type: Boolean,
    default: false
  },
  autoHeight: {
    type: Boolean,
    default: false
  },
  errCapture: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="p-2 w-full">
    <div class="shadow-lg shadow-base" :class="autoHeight ? 'card-box-auto' : 'card-box'">
      <div :class="props.empty ? '' : 'border-b h-[60px] pt-5'" class="border-base border-solid">
        <div class="flex justify-between items-center">
          <div class="px-5 text-gray-500 text-lg font-bold w-full">
            <slot name="title"></slot>
          </div>
          <div class="mr-5">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
      <div class="my-3">
        <div v-show="!errCapture">
          <slot name="content"></slot>
        </div>
        <div v-show="errCapture">
          <slot name="error"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-box {
  @apply h-[330px] rounded-xl border border-white  border-solid;
}
.card-box-auto {
  @apply h-full rounded-xl border border-white  border-solid;
}
</style>
