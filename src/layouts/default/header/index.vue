<script lang="ts" setup>
import { Setting } from "@element-plus/icons-vue";
</script>

<template>
  <el-header
    class="border-b border-gray-200 border-solid"
    style="text-align: right; font-size: 12px"
  >
    <div class="toolbar">
      <span class="font-sans text-gray-600 text-sm font-medium">股东小陈</span>
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
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
