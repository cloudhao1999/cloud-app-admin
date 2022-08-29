<script setup lang="ts">
import tabService from "@/hooks/useTab";
</script>

<template>
  <el-main>
    <router-view v-if="tabService.isRouterAlive.value" v-slot="{ Component, route }">
      <template v-if="route.meta.menu?.iframe_link">
        <Transition appear name="el-fade-in-linear">
          <EmptyBlock>
            <iframe
              class="w-full h-full"
              :src="route.meta.menu?.iframe_link"
              frameborder="0"
            ></iframe>
          </EmptyBlock>
        </Transition>
      </template>
      <template v-else>
        <Transition appear name="el-fade-in-linear">
          <EmptyBlock>
            <keep-alive>
              <component :is="Component" v-if="route.meta?.keepAlive" :key="route.path" />
            </keep-alive>
            <component :is="Component" v-if="!route.meta.keepAlive" :key="route.path" />
          </EmptyBlock>
        </Transition>
      </template>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
