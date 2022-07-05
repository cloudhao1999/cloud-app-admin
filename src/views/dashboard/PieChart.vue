<script setup lang="ts">
import { useElementSize, watchDebounced } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { normalOptions, tinyOptions } from "./modules/pie";

const { t } = useI18n();
const pie = ref(null);
const { width } = useElementSize(pie);

const options = ref({
  legend: normalOptions.legend,
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)"
  },
  series: [
    {
      type: "pie",
      radius: [10, 100],
      roseType: "area",
      center: normalOptions.center,
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
        { value: 28, name: "水系" },
        { value: 26, name: "火系" },
        { value: 22, name: "控制系" },
        { value: 18, name: "岩石系" }
      ]
    }
  ]
});

watchDebounced(
  () => width.value,
  (width) => {
    if (width < 250) {
      options.value.legend = tinyOptions.legend;
      options.value.series[0].center = tinyOptions.center;
    } else {
      options.value.legend = normalOptions.legend;
      options.value.series[0].center = normalOptions.center;
    }
  },
  {
    debounce: 200,
    maxWait: 500
  }
);
</script>

<template>
  <Card>
    <template #title>
      <p class="truncate">{{ t("page.common.dashboard.card.percentage") }}</p>
    </template>
    <template #content>
      <div class="overflow-auto">
        <VChart ref="pie" class="chart" :autoresize="true" :option="options" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.chart {
  height: 300px;
}
</style>
