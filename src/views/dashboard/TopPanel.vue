<script setup lang="ts">
import PiKa from "@/assets/img/pika.webp";
import Kabi from "@/assets/img/kabi.webp";
import Keda from "@/assets/img/keda.webp";
import Jieni from "@/assets/img/jieni.webp";

const animalList = [
  {
    id: 1,
    name: "皮卡丘",
    price: "1000",
    unit: "RMB",
    category: "雷电系",
    color: "bg-yellow-300",
    description: "小智的那只最牛",
    img: PiKa
  },
  {
    id: 2,
    name: "方酱",
    price: "600",
    unit: "RMB",
    category: "草系",
    color: "bg-green-500",
    description: "只会睡觉",
    img: Kabi
  },
  {
    id: 3,
    name: "可达鸭",
    price: "50",
    unit: "RMB",
    category: "精神系",
    color: "bg-yellow-500",
    description: "最近在肯德基很火",
    img: Keda
  },
  {
    id: 4,
    name: "杰尼龟",
    price: "70",
    unit: "RMB",
    category: "水系",
    color: "bg-blue-400",
    description: "他会咬你信不信",
    img: Jieni
  }
];
</script>

<template>
  <el-row>
    <el-col v-for="animal in animalList" :key="animal.id" class="mt-1" :sm="24" :md="12" :xl="6">
      <Panel :banner-color="animal.color" :img-url="animal.img">
        <template #title> {{ animal.name }} </template>
        <template #subtitle> {{ animal.price }} </template>
        <template #badge> {{ animal.unit }} </template>
        <template #banner> {{ animal.category }} </template>
        <template #description> {{ animal.description }} </template>
      </Panel>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.el-col {
  margin: 8px 0;
}
</style>
