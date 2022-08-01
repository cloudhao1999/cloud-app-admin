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
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss"></style>
