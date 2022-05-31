<script setup lang="ts">
import { ref } from "vue";
const content = ref("<p>Hello</p>");
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-full">
      <WangEditor v-model="content" />
      <div class="my-3 font-bold text-gray-500 border dark:border-solid shadow-md rounded-md p-3">
        {{ content }}
      </div>
    </div>
  </div>
</template>
