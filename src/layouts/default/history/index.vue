<script setup lang="ts">
import { ref } from "vue";
const size = ref(0);
const tags = ref([
  { name: "首页" },
  { name: "普通表单" },
  { name: "可编辑表单" },
  { name: "历史记录" },
  { name: "购物车管理" }
]);
</script>

<template>
  <div class="self-start flex w-full p-1 border-b border-gray-200 border-solid">
    <el-space wrap :size="size">
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        size="large"
        type="info"
        color="#fff"
        class="mx-1"
        closable
      >
        {{ tag.name }}
      </el-tag>
    </el-space>
  </div>
</template>

<style scoped></style>
