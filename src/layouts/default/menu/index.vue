<script lang="ts" setup>
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
</script>

<template>
  <el-aside class="w-[280px] min-h-screen h-full border-r border-gray-200 border-solid">
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><message /></el-icon>父目录 1
          </template>
          <el-menu-item index="1-1">选项 1</el-menu-item>
          <el-menu-item index="1-2">选项 2</el-menu-item>
          <el-menu-item index="1-3">选项 3</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项 4-1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-5">
            <template #title>选项5</template>
            <el-menu-item index="1-5-1">选项 5-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>父目录 2
          </template>
          <el-menu-item index="2-1">选项 1</el-menu-item>
          <el-menu-item index="2-2">选项 2</el-menu-item>
          <el-menu-item index="2-3">选项 3</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>选项 4</template>
            <el-menu-item index="2-4-1">选项 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><setting /></el-icon>父目录 3
          </template>
          <el-menu-item index="3-1">选项 1</el-menu-item>
          <el-menu-item index="3-2">选项 2</el-menu-item>
          <el-menu-item index="3-3">选项 3</el-menu-item>
          <el-sub-menu index="3-4">
            <template #title>选项 4</template>
            <el-menu-item index="3-4-1">选项 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>
.el-aside {
  color: var(--el-text-color-primary);
}
.el-menu {
  border-right: none;
}
</style>
