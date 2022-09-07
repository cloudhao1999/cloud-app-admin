<script setup lang="ts">
import { useScreenPixel } from "@/utils/web";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { sm, md } = useScreenPixel();

const { pkg } = __APP_INFO__;
const { version } = pkg;
</script>

<template>
  <Card auto-height>
    <template #title> {{ t("page.about.info.title") }} </template>
    <template #content>
      <div class="px-5">
        <el-descriptions class="margin-top" :column="sm ? 1 : md ? 2 : 3" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">{{ t("page.about.info.version") }}</div>
            </template>
            <el-tag size="small">v{{ version }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">{{ t("page.about.info.doc") }}</div>
            </template>
            <el-link type="primary" href="https://www.cloudhao.top/pages/c125c3/" target="_blank"
              >文档地址</el-link
            >
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">{{ t("page.about.info.preview") }}</div>
            </template>
            <el-link
              type="primary"
              href="https://cloudhao1999.github.io/cloud-app-admin/#/login"
              target="_blank"
              >预览地址</el-link
            >
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">{{ t("page.about.info.github") }}</div>
            </template>
            <el-link
              type="primary"
              href="https://github.com/cloudhao1999/cloud-app-admin"
              target="_blank"
              >Github仓库</el-link
            >
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
