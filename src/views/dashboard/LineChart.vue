<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const data = [
  ["2022-05-05", 116],
  ["2022-05-06", 129],
  ["2022-05-07", 135],
  ["2022-05-08", 86],
  ["2022-05-09", 73],
  ["2022-05-10", 85],
  ["2022-05-11", 73],
  ["2022-05-12", 68],
  ["2022-05-13", 92],
  ["2022-05-14", 130],
  ["2022-05-15", 245],
  ["2022-05-16", 139],
  ["2022-05-17", 115],
  ["2022-05-18", 111],
  ["2022-05-19", 309],
  ["2022-05-20", 206],
  ["2022-05-21", 137],
  ["2022-05-22", 128],
  ["2022-05-23", 85],
  ["2022-05-24", 94],
  ["2022-05-25", 71],
  ["2022-05-26", 106],
  ["2022-05-27", 84],
  ["2022-05-28", 93],
  ["2022-05-29", 85],
  ["2022-05-30", 73]
];
const dateList = data.map(function (item) {
  return item[0];
});
const valueList = data.map(function (item) {
  return item[1];
});
const options = ref({
  visualMap: [
    {
      show: false,
      type: "continuous",
      seriesIndex: 0,
      min: 0,
      max: 400
    }
  ],
  tooltip: {
    trigger: "axis",
    formatter: function (params: any) {
      return `${params[0].marker}${params[0].value} RMB`;
    }
  },
  xAxis: [
    {
      data: dateList
    }
  ],
  yAxis: [{}],
  grid: [
    {
      top: "30px",
      left: "50px",
      right: "25px"
    }
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      data: valueList
    }
  ]
});
</script>

<template>
  <Card>
    <template #title>{{ t("page.common.dashboard.card.coda") }}</template>
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
