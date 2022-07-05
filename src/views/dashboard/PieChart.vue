<script setup lang="ts">
import { EchartEnum } from "@/enum/echartEnum";
import { useElementSize, watchDebounced } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { normalOptions, pieOptions, tinyOptions } from "./modules/pie";

const { t } = useI18n();
const pie = ref(null);
const { width } = useElementSize(pie);

const options = ref(pieOptions);

watchDebounced(
  () => width.value,
  (width) => {
    if (width < EchartEnum.ECHART_MIN_WIDTH) {
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
