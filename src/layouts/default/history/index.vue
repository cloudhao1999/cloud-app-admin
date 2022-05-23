<script setup lang="ts">
import { ref, watchEffect } from "vue";
import menuService from "@/hooks/useMenu";
import { useRoute } from "vue-router";

const size = ref(0);
const route = useRoute();
const activeHistory = ref<string>();

watchEffect(() => {
  activeHistory.value = route.name as string;
});
</script>

<template>
  <div class="history self-start flex w-full p-1 border-b border-gray-200 border-solid">
    <el-space wrap :size="size">
      <el-tag
        v-for="tag in menuService.history.value"
        :key="tag.title"
        size="large"
        :type="activeHistory === tag.route ? '' : 'info'"
        class="mx-1 cursor-pointer"
        :closable="activeHistory === tag.route ? false : true"
        @close="menuService.removeHistoryMenu(tag)"
        @click="$router.push({ name: tag.route })"
      >
        {{ tag.title }}
      </el-tag>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
@media screen and(max-width:768px) {
  .history {
    display: none;
  }
}
</style>
