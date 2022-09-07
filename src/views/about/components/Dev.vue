<script setup lang="ts">
import { useScreenPixel } from "@/utils/web";
import { useI18n } from "vue-i18n";
export interface schemaItem {
  field: string;
  label: string;
}

const { t } = useI18n();
const { sm, md } = useScreenPixel();

const { pkg } = __APP_INFO__;
const { devDependencies } = pkg;

const schema: schemaItem[] = [];

Object.keys(devDependencies).forEach((key) => {
  schema.push({ field: devDependencies[key], label: key });
});
</script>

<template>
  <Card auto-height>
    <template #title> {{ t("page.about.dev.title") }} </template>
    <template #content>
      <div class="px-5">
        <el-descriptions :column="sm ? 1 : md ? 2 : 3" border>
          <el-descriptions-item
            v-for="(item, index) in schema"
            :key="index"
            :label="item.label"
            label-align="left"
            align="left"
          >
            <a :href="'https://www.npmjs.com/package/' + item.label" target="_blank">
              <span style="color: var(--el-color-primary)">{{ item.field }}</span>
            </a>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
