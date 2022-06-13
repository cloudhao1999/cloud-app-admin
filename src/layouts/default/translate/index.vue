<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
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

@media screen and(max-width:768px) {
  .fullscreen {
    display: none;
  }
}
</style>
