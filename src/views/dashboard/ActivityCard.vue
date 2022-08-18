<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { setupDashobardAttributes } from "./modules/activity";

const { t } = useI18n();

const { activityColumns, activityTableData } = setupDashobardAttributes();
</script>

<template>
  <div>
    <Card>
      <template #title> {{ t("page.common.dashboard.card.leaderboard") }} </template>
      <template #content>
        <c-table
          :table-data="activityTableData"
          :columns="activityColumns"
          header-align="right"
          stripe
          style="width: 100%"
        >
          <template #category="{ scope }">
            <span class="p-1 rounded-md bg-gray-500 text-white text-sm">{{
              scope.row.category
            }}</span>
          </template>
          <template #sort="{ scope }">
            <div class="flex">
              <i-mdi-trending-up
                v-if="scope.row.sortUnit === 'up'"
                class="text-red-500"
                style="font-size: 1.6em"
              />
              <i-mdi-trending-down v-else class="text-green-500" style="font-size: 1.6em" />
              <span class="pl-2">{{ scope.row.sort }}</span>
            </div>
          </template>
        </c-table>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.clipboard-list {
  @apply cursor-pointer mx-2 hover:scale-125 duration-500;
}
</style>
