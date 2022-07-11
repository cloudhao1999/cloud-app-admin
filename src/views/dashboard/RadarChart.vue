<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useElementSize } from "@vueuse/core";
import { normalOptions, radarOptions, tinyOptions } from "./modules/radar";
import { watchDebounced } from "@vueuse/core";
import { EchartEnum } from "@/enum/echartEnum";
import { useTheme } from "@/hooks/useTheme";

const { t } = useI18n();
const radar = ref(null);
const { width } = useElementSize(radar);

const options = ref(radarOptions);
const { state } = useTheme();

watchDebounced(
  () => width.value,
  (width) => {
    if (width < EchartEnum.ECHART_MIN_WIDTH) {
      options.value.radar[0].axisName = tinyOptions.getOptions().axisName;
    } else {
      options.value.radar[0].axisName = normalOptions.axisName;
    }
  },
  {
    debounce: 200,
    maxWait: 500
  }
);

watch(
  () => state.value,
  () => {
    if (width.value < EchartEnum.ECHART_MIN_WIDTH) {
      nextTick(() => {
        options.value.radar[0].axisName = tinyOptions.getOptions().axisName;
      });
    } else {
      options.value.radar[0].axisName = normalOptions.axisName;
    }
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
