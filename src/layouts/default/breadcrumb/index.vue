<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import menuService from "@/hooks/useMenu";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();
const currentBread = ref<string>("");
const breadArr = ref<string[]>([]);

watchEffect(() => {
  currentBread.value = menuService.getCurrentMenu(route) as unknown as string;
  breadArr.value = [...new Set(currentBread.value?.split("-"))];
});
</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(bread, index) in breadArr" :key="index">{{
        t(bread)
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .breadcrumb {
    display: none;
  }
}
</style>
