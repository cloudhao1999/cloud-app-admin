<script setup lang="ts">
import Panel from "./components/panel.vue";
import PiKa from "@/assets/img/pika.jpeg";
import Kabi from "@/assets/img/kabi.jpeg";
import Keda from "@/assets/img/keda.jpeg";
import Jieni from "@/assets/img/jieni.jpeg";

const animalList = [
  {
    id: 1,
    name: "喵喵",
    price: "1000",
    unit: "RMB",
    category: "暹罗猫",
    color: "bg-yellow-300",
    description: "只会喵喵叫",
    img: PiKa
  },
  {
    id: 2,
    name: "汪汪",
    price: "600",
    unit: "RMB",
    category: "柯基犬",
    color: "bg-green-500",
    description: "只会汪汪叫",
    img: Kabi
  },
  {
    id: 3,
    name: "兔子",
    price: "50",
    unit: "RMB",
    category: "田园兔",
    color: "bg-yellow-500",
    description: "兔子怎么叫",
    img: Keda
  },
  {
    id: 4,
    name: "乌龟",
    price: "70",
    unit: "RMB",
    category: "鳄龟",
    color: "bg-blue-400",
    description: "他会咬你信不信",
    img: Jieni
  }
];
</script>

<template>
  <el-row>
    <el-col v-for="animal in animalList" :key="animal.id" :sm="24" :md="12" :xl="6">
      <Panel :badge-color="animal.color" :img-url="animal.img">
        <template #title> {{ animal.name }} </template>
        <template #subtitle> {{ animal.price }} </template>
        <template #badge> {{ animal.unit }} </template>
        <template #banner> {{ animal.category }} </template>
        <template #description> {{ animal.description }} </template>
      </Panel>
    </el-col>
  </el-row>
</template>

<style scoped></style>
