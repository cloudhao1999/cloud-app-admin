<script setup lang="ts"></script>

<template>
  <el-main>
    <router-view v-slot="{ Component }">
      <Transition appear name="el-fade-in-linear">
        <component :is="Component" />
      </Transition>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
