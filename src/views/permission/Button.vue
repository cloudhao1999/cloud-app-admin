<script setup lang="ts">
import permissionService from "@/hooks/usePermission";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="relative w-full">
    <div class="p-5 absolute w-full">
      <p class="mt-2 mr-4 text-gray-600">{{ permissionService.defaultPermission }}</p>
      <div>
        <el-switch
          :value="permissionService.defaultPermission.value"
          class="mb-2"
          active-value="admin"
          inactive-value="editor"
          active-text="Admin"
          inactive-text="Editor"
          @change="() => permissionService.togglePermission()"
        />
      </div>
      <el-space>
        <el-button v-permission="'PermissionPage:edit'">{{ t("page.common.btn.edit") }}</el-button>
        <el-button v-permission="'PermissionPage:add'" type="primary">{{
          t("page.common.btn.add")
        }}</el-button>
        <el-button v-permission="'PermissionPage:delete'" type="danger">{{
          t("page.common.btn.delete")
        }}</el-button>
        <el-button v-permission="'PermissionPage:batchDelete'" type="danger">{{
          t("page.common.btn.batchDelete")
        }}</el-button>
      </el-space>
    </div>
  </div>
</template>

<style scoped></style>
