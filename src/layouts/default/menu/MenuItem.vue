<script setup lang="ts">
import menuService from "@/hooks/useMenu";
import { useI18n } from "vue-i18n";
import { Menu } from "#/menu";
import { useScreenPixel } from "@/utils/web";

const { t } = useI18n();

interface Props {
  subMenu: Menu[];
  activeKey?: string;
}
const props = withDefaults(defineProps<Props>(), {
  subMenu: () => [],
  activeKey: ""
});

const getActiveKey = (menu: Menu, cmenu: Menu) => {
  return props.activeKey === ""
    ? menu.title + "-" + cmenu.title
    : props.activeKey + "-" + cmenu.title;
};

function handleMenuClick(cmenu: Menu) {
  const { sm, cmd } = useScreenPixel();
  if (sm.value || cmd.value) {
    menuService.toggleState();
  }
  menuService.linkPage(cmenu);
}
</script>

<template>
  <template v-for="(menu, index) of props.subMenu" :key="index">
    <template v-if="menu.hideParent">
      <el-menu-item
        v-for="(cmenu, key) of menu.children"
        :key="'sub_ ' + key"
        :active-key="menu.title + '-' + cmenu.title"
        :index="getActiveKey(menu, cmenu)"
        @click="handleMenuClick(cmenu)"
      >
        <el-icon><component :is="menu.icon" /></el-icon>
        <span>{{ t(menu.title!) }}</span></el-menu-item
      >
    </template>

    <el-sub-menu v-else :index="menu.title!">
      <template #title>
        <el-icon><component :is="menu.icon" /></el-icon>
        <span>{{ t(menu.title!) }}</span>
      </template>
      <template v-for="(cmenu, key) of menu.children">
        <menu-item
          v-if="cmenu.children"
          :key="'sub_ ' + key"
          :active-key="menu.title + '-' + cmenu.title"
          :sub-menu="menu.children"
        ></menu-item>
        <el-menu-item
          v-else
          :key="key"
          :index="getActiveKey(menu, cmenu)"
          @click="handleMenuClick(cmenu)"
          >{{ t(cmenu?.title!) }}</el-menu-item
        >
      </template>
    </el-sub-menu>
  </template>
</template>

<style scoped></style>
