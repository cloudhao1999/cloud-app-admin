<script lang="ts" setup>
import TopPanel from "./dashboard/TopPanel.vue";
import ActivityCard from "./dashboard/ActivityCard.vue";
import TimeLine from "./dashboard/TimeLine.vue";
</script>
<template>
  <TopPanel />
  <el-row>
    <el-col class="mt-1" :sm="24" :md="12" :xl="12">
      <TimeLine />
    </el-col>
    <el-col class="mt-1" :sm="24" :md="12" :xl="12">
      <ActivityCard />
    </el-col>
  </el-row>
</template>

<style scoped></style>
