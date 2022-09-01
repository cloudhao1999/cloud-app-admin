<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    default: ""
  },
  bannerColor: {
    type: String,
    default: "bg-blue-300"
  }
});
</script>

<template>
  <div class="px-2 w-full">
    <div
      class="border border-white border-solid grid grid-cols-3 gap-4 h-[180px] rounded-xl shadow-lg shadow-base"
    >
      <div class="pl-6 col-span-2 flex flex-col justify-start items-start">
        <span class="pt-8 pb-2 text-gray-400 text-lg">
          <slot name="title"></slot>
        </span>
        <div>
          <span class="text-lg font-bold">
            <slot name="subtitle"></slot>
          </span>
          <span class="pl-2 font-bold text-gray-400">
            <slot name="badge"></slot>
          </span>
        </div>
        <div class="pt-10">
          <span :class="props.bannerColor" class="p-1 rounded-md text-white text-sm">
            <slot name="banner"></slot>
          </span>
          <span class="pl-4 text-gray-400 text-sm">
            <slot name="description"></slot>
          </span>
        </div>
      </div>
      <div class="flex mt-6 pr-2 justify-center">
        <img
          class="border shadow-lg shadow-dark-200 border-base dark:border-light-50 border-light-50 border-solid w-[100px] h-[100px] rounded-md"
          :src="props.imgUrl"
          alt="avatar"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
