<script lang="ts" setup>
import Banner from "../banner/index.vue";
</script>

<template>
  <el-aside class="w-[280px] min-h-screen h-full border-r border-gray-200 border-solid">
    <div class="flex justify-center">
      <Banner />
    </div>
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']">
        <el-menu-item index="1-1">
          <el-icon><Monitor /></el-icon>首页
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><EditPen /></el-icon>编辑器
          </template>
          <el-menu-item index="1-1">文本编辑</el-menu-item>
          <el-menu-item index="1-2">Markdown编辑</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Reading /></el-icon>表单展示
          </template>
          <el-menu-item index="2-1">普通表单</el-menu-item>
          <el-menu-item index="2-2">动态表单</el-menu-item>
          <el-menu-item index="2-3">虚拟化表单</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>其它</template>
            <el-menu-item index="2-4-1">可编辑表单</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Setting /></el-icon>订单管理
          </template>
          <el-menu-item index="3-1">购物车管理</el-menu-item>
          <el-menu-item index="3-2">历史记录</el-menu-item>
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
