<script setup lang="ts">
import { onMounted } from "vue";
import { fetchUserInfo } from "./api/user";

onMounted(async () => {
  const res = await fetchUserInfo();
  console.log(res.data.age);
});
</script>
<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <el-button>你好啊</el-button>
  </div>
</template>
