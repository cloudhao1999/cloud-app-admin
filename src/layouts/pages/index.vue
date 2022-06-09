<script setup lang="ts"></script>

<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <template v-if="route.meta.menu?.iframe_link">
        <keep-alive>
          <Transition appear name="el-fade-in-linear">
            <iframe
              class="w-full h-full"
              :src="route.meta.menu?.iframe_link"
              frameborder="0"
            ></iframe>
          </Transition>
        </keep-alive>
      </template>
      <template v-else>
        <Transition appear name="el-fade-in-linear">
          <component :is="Component" />
        </Transition>
      </template>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
