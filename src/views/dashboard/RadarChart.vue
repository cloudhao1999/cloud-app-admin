<script setup lang="ts">
import * as echarts from "echarts";
import { useI18n } from "vue-i18n";
import { useElementSize } from "@vueuse/core";
import { normalOptions, tinyOptions } from "./modules/radar";
import { watchDebounced } from "@vueuse/core";

const { t } = useI18n();
const radar = ref(null);
const { width } = useElementSize(radar);

const options = ref({
  color: ["#56A3F1", "#FF917C"],
  radar: [
    {
      indicator: [
        { text: "智力", max: 150 },
        { text: "体魄", max: 150 },
        { text: "性格", max: 150 },
        { text: "外貌", max: 120 },
        { text: "技能", max: 108 },
        { text: "寿命", max: 72 }
      ],
      center: ["50%", "45%"],
      radius: 80,
      axisName: normalOptions.axisName
    }
  ],
  series: [
    {
      type: "radar",
      data: [
        {
          value: [121, 118, 130, 100, 99, 70],
          name: "Data C",
          symbol: "rect",
          symbolSize: 12,
          lineStyle: {
            type: "dashed"
          },
          label: {
            show: true,
            formatter: function (params: any) {
              return params.value;
            }
          }
        },
        {
          value: [100, 93, 50, 90, 70, 60],
          name: "Data D",
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: "rgba(255, 145, 124, 0.1)",
                offset: 0
              },
              {
                color: "rgba(255, 145, 124, 0.9)",
                offset: 1
              }
            ])
          }
        }
      ]
    }
  ]
});

watchDebounced(
  () => width.value,
  (width) => {
    if (width < 250) {
      options.value.radar[0].axisName = tinyOptions.axisName;
    } else {
      options.value.radar[0].axisName = normalOptions.axisName;
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
    <template #title>{{ t("page.common.dashboard.card.pixie") }}</template>
    <template #content>
      <VChart ref="radar" class="chart" :autoresize="true" :option="options" />
    </template>
  </Card>
</template>

<style scoped>
.chart {
  height: 300px;
}
</style>
