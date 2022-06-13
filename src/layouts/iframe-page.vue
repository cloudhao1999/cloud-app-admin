<script lang="ts" setup>
import Menu from "@/layouts/default/menu/index.vue";
import Header from "@/layouts/default/header/index.vue";
import History from "@/layouts/default/history/index.vue";
import menuService from "@/hooks/useMenu";
import IframePageView from "./pages/index.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";

const route = useRoute();
watch(
  route,
  () => {
    menuService.addHistoryMenu(route);
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
      <IframePageView />
    </el-container>
  </el-container>
</template>

<style scoped></style>
