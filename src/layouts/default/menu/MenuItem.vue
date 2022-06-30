<script setup lang="ts">
import menuService from "@/hooks/useMenu";
import { useI18n } from "vue-i18n";
import { Menu } from "#/menu";

const { t } = useI18n();

interface Props {
  subMenu: Menu[];
}
const props = withDefaults(defineProps<Props>(), {
  subMenu: () => []
});
</script>

<template>
  <el-sub-menu v-for="(menu, index) of props.subMenu" :key="index" :index="menu.title!">
    <template #title>
      <el-icon><component :is="menu.icon" /></el-icon>
      <span>{{ t(menu.title!) }}</span>
    </template>
    <template v-for="(cmenu, key) of menu.children">
      <menu-item v-if="cmenu.children" :key="'sub_ ' + key" :sub-menu="menu.children"></menu-item>
      <el-menu-item
        v-else
        :key="key"
        :index="menu.title + '-' + cmenu.title"
        @click="menuService.linkPage(cmenu)"
        >{{ t(cmenu?.title!) }}</el-menu-item
      >
    </template>
  </el-sub-menu>
</template>

<style scoped></style>
