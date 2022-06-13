<script lang="ts" setup>
import Banner from "../banner/index.vue";
import menuService from "@/hooks/useMenu";
import { computed, ref, watchEffect } from "vue";
import { ElMenu } from "element-plus";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();
const acticeIndex = ref<string>("");

watchEffect(() => {
  acticeIndex.value = menuService.getCurrentMenu(route) as unknown as string;
});

const isCollapse = computed(() => {
  return menuService.close.value;
});
</script>

<template>
  <el-aside class="admin-menu" :class="{ close: menuService.close.value }">
    <div class="flex justify-center">
      <Banner />
    </div>
    <el-menu :collapse="isCollapse" :default-active="acticeIndex">
      <el-sub-menu
        v-for="(menu, index) of menuService.menus.value"
        :key="index"
        :index="menu.title!"
      >
        <template #title>
          <el-icon><component :is="menu.icon" /></el-icon>
          <span>{{ t(menu.title!) }}</span>
        </template>
        <el-menu-item
          v-for="(cmenu, key) of menu.children"
          :key="key"
          :index="menu.title + '-' + cmenu.title"
          @click="menuService.linkPage(cmenu)"
          >{{ t(cmenu?.title!) }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
    <teleport to="body">
      <div
        v-show="!menuService.close.value"
        class="bg block md:hidden"
        @click="menuService.toggleState"
      ></div>
    </teleport>
  </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
  color: var(--el-text-color-primary);
  @apply bg-white;
}
.el-menu {
  border-right: none;
}
.admin-menu {
  @apply w-[250px] duration-500 dark:bg-black bg-white min-h-screen h-full border-r border-gray-200 border-solid z-50;
  &.close {
    @apply w-[70px] duration-500;
  }
}

@media screen and(max-width:768px) {
  .admin-menu {
    @apply w-[250px] duration-500 absolute top-0 left-0 min-h-screen h-full border-r border-gray-200 border-solid;
    &.close {
      @apply left-[-250px] duration-500;
    }
  }
  .bg {
    @apply bg-gray-600 w-screen h-screen z-20 opacity-75  absolute left-0 top-0;
  }
}
</style>
