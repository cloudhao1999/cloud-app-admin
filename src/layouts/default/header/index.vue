<script lang="ts" setup>
import Breadcrumb from "../breadcrumb/index.vue";
import Drawer from "../drawer/index.vue";

import { Setting } from "@element-plus/icons-vue";
import { useNow, useDateFormat } from "@vueuse/core";
import { GITHUB_REPOSITORY } from "@/enum/userEnum";
import { openNewTab } from "@/utils/web";
import { useRouter } from "vue-router";
import { useDialog } from "@/hooks/useDialog";
import { useMessage } from "@/hooks/useMessage";
import { userStore } from "@/store/user";

const router = useRouter();
const userState = userStore();
const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm");

function toLogin() {
  useDialog(
    "是否确认退出系统?",
    () => {
      router.push("/login");
      useMessage("success", "退出成功");
    },
    (err) => {
      console.log(err);
      useMessage("error", `退出失败：${err}`);
    }
  );
}
</script>

<template>
  <el-header
    class="border-b border-gray-200 border-solid flex justify-between"
    style="text-align: right; font-size: 12px"
  >
    <div class="flex align-center items-center">
      <Drawer />
    </div>
    <div class="flex align-center items-center">
      <Breadcrumb />
    </div>
    <div class="flex items-center gap-2 justify-end h-full flex-1">
      <el-avatar shape="square" :size="40" :src="userState.avatar" />
      <div class="flex flex-col items-start">
        <span class="font-sans text-gray-600 text-sm font-medium">你好，{{ userState.name }}</span>
        <span class="font-sans text-gray-500 text-sm">{{ formatted }}</span>
      </div>
      <el-dropdown>
        <el-icon :size="20" class="ml-2 mt-[1px] cursor-pointer"><setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="openNewTab(GITHUB_REPOSITORY)">Github仓库</el-dropdown-item>
            <el-dropdown-item @click="toLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style scoped></style>
