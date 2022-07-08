<script lang="ts" setup>
import Breadcrumb from "../breadcrumb/index.vue";
import Drawer from "../drawer/index.vue";

import Themme from "../theme/index.vue";
import Avatar from "../avatar/index.vue";
import Fullscreen from "../fullscreen/index.vue";
import Translate from "../translate/index.vue";
</script>

<template>
  <el-header
    class="border-b border-base border-solid flex justify-between"
    style="text-align: right; font-size: 12px"
  >
    <div class="flex align-center items-center">
      <Drawer />
    </div>
    <div class="flex align-center items-center">
      <Breadcrumb />
    </div>
    <div class="flex items-center gap-2 justify-end h-full flex-1">
      <Translate />
      <Fullscreen />
      <Themme />
      <Avatar />
    </div>
  </el-header>
</template>

<style scoped></style>
