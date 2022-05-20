<script lang="ts" setup>
import Banner from "../banner/index.vue";
import menuService from "@/hooks/useMenu";

console.log(menuService.menus.value);
</script>

<template>
  <el-aside class="w-[200px] min-h-screen h-full border-r border-gray-200 border-solid">
    <div class="flex justify-center">
      <Banner />
    </div>
    <el-scrollbar>
      <el-menu :default-openeds="['0', '1']">
        <el-sub-menu
          v-for="(menu, index) of menuService.menus.value"
          :key="index"
          :index="'' + index"
        >
          <template #title>
            <el-icon><component :is="menu.icon" /></el-icon>{{ menu.title }}
          </template>
          <el-menu-item
            v-for="(cmenu, key) of menu.children"
            :key="key"
            :index="index + '-' + key"
            @click="$router.push({ name: cmenu.route })"
            >{{ cmenu?.title }}</el-menu-item
          >
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
