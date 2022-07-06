<script setup lang="ts">
import permissionService from "@/hooks/usePermission";
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
    </div>
  </div>
</template>

<style scoped></style>
