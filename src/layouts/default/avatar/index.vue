<script setup lang="ts">
import { Setting } from "@element-plus/icons-vue";
import { UserEnum } from "@/enum/userEnum";
import { useNow, useDateFormat } from "@vueuse/core";
import { useDialog } from "@/hooks/useDialog";
import { useMessage } from "@/hooks/useMessage";
import { removeToken } from "@/utils/auth";
import { userStore } from "@/store/user";
import { openNewTab } from "@/utils/web";
import { useI18n } from "vue-i18n";

const router = useRouter();

const userState = userStore();
const { t } = useI18n();
const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm");

function toLogin() {
  useDialog(t("golbal.logout.message.confirm"), () => {
    removeToken(() => {
      router.replace("/login");
      useMessage("success", t("golbal.logout.message.success"));
    });
  });
}
</script>

<template>
  <el-avatar shape="square" :size="40" :src="userState.avatar" />
  <div class="flex flex-col items-start">
    <span class="font-sans dark:text-white text-gray-600 text-sm font-medium">{{
      t("hello") + userState.name
    }}</span>
    <span class="font-sans dark:text-white text-gray-500 text-sm">{{ formatted }}</span>
  </div>
  <el-dropdown>
    <el-icon :size="20" class="ml-2 mt-[1px] hover:rotate-90 duration-500 cursor-pointer"
      ><setting
    /></el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="openNewTab(UserEnum.GITHUB_REPOSITORY)">{{
          t("github")
        }}</el-dropdown-item>
        <el-dropdown-item @click="toLogin">{{ t("logout") }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped></style>
