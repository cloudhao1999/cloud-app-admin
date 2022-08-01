<script setup lang="ts">
import tabService from "@/hooks/useTab";
</script>

<template>
  <el-main>
    <router-view v-if="tabService.isRouterAlive.value" v-slot="{ Component, route }">
      <template v-if="route.meta.menu?.iframe_link">
        <keep-alive>
          <Transition appear name="el-fade-in-linear">
            <EmptyBlock>
              <iframe
                class="w-full h-full"
                :src="route.meta.menu?.iframe_link"
                frameborder="0"
              ></iframe>
            </EmptyBlock>
          </Transition>
        </keep-alive>
      </template>
      <template v-else>
        <Transition appear name="el-fade-in-linear">
          <EmptyBlock>
            <component :is="Component" />
          </EmptyBlock>
        </Transition>
      </template>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
