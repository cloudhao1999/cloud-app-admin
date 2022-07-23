<script lang="ts" setup>
import Banner from "../banner/index.vue";
import menuService from "@/hooks/useMenu";
import MenuItem from "./MenuItem.vue";
import { ElMenu } from "element-plus";

const route = useRoute();
const acticeIndex = ref<string>("");

watchEffect(() => {
  acticeIndex.value = menuService.getCurrentMenu(route) as unknown as string;
});

const isCollapse = computed(() => {
  return menuService.close.value;
});
</script>

<template>
  <el-aside class="admin-menu border-base bg-dark" :class="{ close: menuService.close.value }">
    <div class="flex justify-center">
      <Banner />
    </div>
    <el-menu :collapse="isCollapse" :default-active="acticeIndex">
      <menu-item :sub-menu="menuService.menus.value" />
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
}
.el-menu {
  border-right: none;
}
.admin-menu {
  @apply w-[250px] duration-500 dark:bg-black min-h-screen h-full border-r border-solid z-50;
  &.close {
    @apply w-[70px] duration-500;
  }
}

@media screen and (max-width: 766px) {
  .admin-menu {
    @apply w-[250px] duration-500 absolute top-0 left-0 min-h-screen h-full border-r border-solid;
    &.close {
      @apply left-[-250px] duration-500;
    }
  }
  .bg {
    @apply bg-gray-600 w-screen h-screen z-20 opacity-75  absolute left-0 top-0;
  }
}
</style>
