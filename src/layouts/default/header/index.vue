<script lang="ts" setup>
import { Setting } from "@element-plus/icons-vue";
import Breadcrumb from "../breadcrumb/index.vue";
import Drawer from "../drawer/index.vue";
</script>

<template>
  <el-header
    class="border-b border-gray-200 border-solid flex justify-between"
    style="text-align: right; font-size: 12px"
  >
    <div class="flex align-center items-center">
      <Drawer />
    </div>
    <div class="flex align-center items-center">
      <Breadcrumb />
    </div>
    <div class="flex items-center gap-2 justify-end h-full flex-1">
      <el-avatar shape="square" :size="40" src="../../src/assets/img/avatar.jpg" />
      <div class="flex flex-col items-start">
        <span class="font-sans text-gray-600 text-sm font-medium">你好，股东小陈</span>
        <span class="font-sans text-gray-500 text-sm">2022-5-20</span>
      </div>
      <el-dropdown>
        <el-icon :size="20" class="ml-2 mt-[1px] cursor-pointer"><setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Github仓库</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style scoped>
.el-header {
  position: relative;
}

.el-main {
  padding: 0;
}
</style>
