<script lang="ts" setup>
import Menu from "@/layouts/default/menu/index.vue";
import Header from "@/layouts/default/header/index.vue";
import History from "@/layouts/default/history/index.vue";
import tabService from "@/hooks/useTab";
import PageView from "./pages/index.vue";

const route = useRoute();
watch(
  route,
  () => {
    tabService.addHistoryTab(route);
  },
  { immediate: true }
);
</script>
<template>
  <el-container class="h-screen w-full font-sans">
    <Menu />
    <el-container direction="vertical">
      <Header />
      <History />
      <PageView />
    </el-container>
  </el-container>
</template>

<style scoped></style>
