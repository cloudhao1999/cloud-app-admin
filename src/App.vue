<script setup lang="ts">
import { computed } from "vue";

import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import i18nService from "@/hooks/useI18n";

const locale = computed(() => {
  return i18nService.locale.value === "zh-CN" ? zhCn : en;
});
</script>
<template>
  <el-config-provider :locale="locale">
    <div class="h-full min-w-mobile bg-base">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>
