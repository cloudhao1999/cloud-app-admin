<script setup lang="ts">
import Intro from "./components/Intro.vue";
import Info from "./components/Info.vue";
import Dep from "./components/Dep.vue";
import Dev from "./components/Dev.vue";
</script>

<template>
  <div class="relative w-full">
    <div class="p-5 absolute w-full">
      <div class="intro">
        <Intro />
      </div>
      <div class="info">
        <Info />
      </div>
      <div class="dep">
        <Dep />
      </div>
      <div class="dep">
        <Dev />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
