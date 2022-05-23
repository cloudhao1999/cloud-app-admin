<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import menuService from "@/hooks/useMenu";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentBread = ref<string>("");
const breadArr = ref<string[]>([]);

watchEffect(() => {
  currentBread.value = menuService.getCurrentMenu(route) as unknown as string;
  breadArr.value = currentBread.value?.split("-");
});
</script>

<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(bread, index) in breadArr" :key="index">{{
        bread
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped></style>
