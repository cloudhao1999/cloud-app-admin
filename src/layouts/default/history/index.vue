<script setup lang="ts">
import tabService from "@/hooks/useTab";
import { useI18n } from "vue-i18n";
import Option from "./option.vue";

const size = ref(0);
const route = useRoute();
const { t } = useI18n();

const activeHistory = ref<string>();

watchEffect(() => {
  activeHistory.value = route.name as string;
});
</script>

<template>
  <div class="history self-start flex w-full p-1 border-b border-base border-solid">
    <el-space wrap :size="size" class="flex-1">
      <el-tag
        v-for="tag in tabService.history.value"
        :key="tag.title"
        size="large"
        :type="activeHistory === tag.route ? '' : 'info'"
        class="m-1 cursor-pointer"
        :closable="activeHistory === tag.route ? false : true"
        @close="tabService.removeHistoryTab(tag)"
        @click="$router.push({ name: tag.route })"
      >
        {{ t(tag.title!) }}
      </el-tag>
    </el-space>
    <div class="self-center justify-self-end float-right pr-3">
      <Option />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .history {
    display: none;
  }
}
</style>
