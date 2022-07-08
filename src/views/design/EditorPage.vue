<script setup lang="ts">
const content = ref("<p>Hello</p>");
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-full">
      <WangEditor v-model="content" />
      <div class="my-3 font-bold text-gray-500 border border-base border-solid rounded-md p-3">
        {{ content }}
      </div>
    </div>
  </div>
</template>
