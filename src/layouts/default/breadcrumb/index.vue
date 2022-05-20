<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>报表展示</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped></style>
