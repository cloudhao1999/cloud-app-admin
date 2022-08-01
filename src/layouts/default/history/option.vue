<script setup lang="ts">
import { useI18n } from "vue-i18n";
import tabService from "@/hooks/useTab";

const oneTab = computed(() => {
  return tabService.history.value.length === 1;
});

const { t } = useI18n();
</script>

<template>
  <el-dropdown>
    <el-icon>
      <arrow-down />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="RefreshRight">
          <span @click="tabService.reload">{{ t("global.history.dropdown.option.reload") }}</span>
        </el-dropdown-item>
        <el-dropdown-item icon="Close" :disabled="oneTab">
          <span @click="tabService.closeSelf">{{
            t("global.history.dropdown.option.closeSelf")
          }}</span>
        </el-dropdown-item>
        <el-dropdown-item icon="ArrowLeft" divided :disabled="tabService.isTop().value">
          <span @click="tabService.closeLeft">{{
            t("global.history.dropdown.option.closeLeft")
          }}</span>
        </el-dropdown-item>
        <el-dropdown-item icon="ArrowRight" :disabled="tabService.isBottom().value">
          <span @click="tabService.closeRight">{{
            t("global.history.dropdown.option.closeRight")
          }}</span>
        </el-dropdown-item>
        <el-dropdown-item icon="CircleClose" divided :disabled="oneTab">
          <span @click="tabService.closeOther">{{
            t("global.history.dropdown.option.closeOther")
          }}</span>
        </el-dropdown-item>
        <el-dropdown-item icon="DCaret">
          <span @click="tabService.closeAll">{{
            t("global.history.dropdown.option.closeAll")
          }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss"></style>
