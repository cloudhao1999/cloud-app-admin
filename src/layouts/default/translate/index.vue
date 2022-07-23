<script setup lang="ts">
import { useI18n } from "vue-i18n";
import i18nService from "@/hooks/useI18n";

const { locale } = useI18n();
const toggleLocales = () => {
  locale.value = i18nService.locale.value === "zh-CN" ? "en" : "zh-CN";
  i18nService.toggleLocale();
};
</script>

<template>
  <i-mdi-google-translate
    class="fullscreen"
    style="font-size: 1.6em"
    @click="() => toggleLocales()"
  />
</template>

<style lang="scss" scoped>
.fullscreen {
  @apply cursor-pointer text-gray-500 mx-1 hover:text-gray-800 duration-500;
}

@media screen and (max-width: 768px) {
  .fullscreen {
    display: none;
  }
}
</style>
