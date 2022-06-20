<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const options = ref({
  legend: {
    orient: "vertical",
    left: "15%",
    top: "center",
    textStyle: {
      color: "#8f8f8f"
    }
  },
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)"
  },
  series: [
    {
      type: "pie",
      radius: [10, 100],
      roseType: "area",
      center: ["60%", "50%"],
      itemStyle: {
        borderRadius: 8
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: false
        }
      },
      data: [
        { value: 40, name: "雷电系" },
        { value: 38, name: "水系" },
        { value: 32, name: "草系" },
        { value: 30, name: "精神系" },
        { value: 28, name: "鳄龟" },
        { value: 26, name: "火系" },
        { value: 22, name: "控制系" },
        { value: 18, name: "岩石系" }
      ]
    }
  ]
});
</script>

<template>
  <Card>
    <template #title>{{ t("page.common.dashboard.card.percentage") }}</template>
    <template #content>
      <div class="overflow-auto">
        <VChart class="chart" :autoresize="true" :option="options" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.chart {
  height: 300px;
}
</style>
