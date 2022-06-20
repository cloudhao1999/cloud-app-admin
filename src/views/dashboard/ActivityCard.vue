<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const tableData = [
  {
    name: "可达鸭",
    price: 50,
    unit: "RMB",
    category: "精神系",
    color: "bg-yellow-500",
    sort: "50%",
    sortUnit: "up"
  },
  {
    name: "皮卡丘",
    price: 1000,
    unit: "RMB",
    category: "雷电系",
    color: "bg-yellow-300",
    sort: "120%",
    sortUnit: "up"
  },
  {
    name: "方酱",
    price: 600,
    unit: "RMB",
    category: "草系",
    color: "bg-green-500",
    sort: "50%",
    sortUnit: "down"
  },
  {
    name: "杰尼龟",
    price: 70,
    unit: "RMB",
    category: "鳄龟",
    color: "bg-blue-400",
    sort: "60%",
    sortUnit: "up"
  },
  {
    name: "波克比",
    price: 1900,
    unit: "RMB",
    category: "精神系",
    color: "bg-pink-400",
    sort: "150%",
    sortUnit: "up"
  }
];
</script>

<template>
  <div>
    <Card>
      <template #title> {{ t("page.common.dashboard.card.leaderboard") }} </template>
      <template #content>
        <el-table :data="tableData" align="right" header-align="right" stripe style="width: 100%">
          <el-table-column
            prop="name"
            :label="t('page.common.dashboard.column.leaderboard.name')"
          />
          <el-table-column
            sortable
            prop="price"
            :label="t('page.common.dashboard.column.leaderboard.price')"
            width="85"
          />
          <el-table-column
            prop="category"
            width="80"
            :label="t('page.common.dashboard.column.leaderboard.tag')"
          >
            <template #default="scope">
              <span class="p-1 rounded-md bg-gray-500 text-white text-sm">{{
                scope.row.category
              }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="sort"
            width="110"
            :label="t('page.common.dashboard.column.leaderboard.compared')"
          >
            <template #default="scope">
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
          </el-table-column>
        </el-table>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.clipboard-list {
  @apply cursor-pointer mx-2 hover:scale-125 duration-500;
}
</style>
