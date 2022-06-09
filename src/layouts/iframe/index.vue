<script setup lang="ts"></script>

<template>
  <el-main>
    <router-view v-slot="{ route }">
      <keep-alive>
        <Transition appear name="el-fade-in-linear">
          <iframe class="w-full h-full" :src="route.meta.menu?.link" frameborder="0"></iframe>
        </Transition>
      </keep-alive>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
