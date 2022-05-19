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
    <router-view></router-view>
  </div>
</template>
