<script lang="ts" setup>
import Menu from "@/layouts/default/menu/index.vue";
import Header from "@/layouts/default/header/index.vue";
import PageView from "./pages/index.vue";
</script>
<template>
  <el-container class="h-full w-full font-sans">
    <Menu />
    <el-container direction="vertical">
      <Header />
      <PageView />
    </el-container>
  </el-container>
</template>

<style scoped></style>
