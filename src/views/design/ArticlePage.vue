<script setup lang="ts">
import { UrlListType } from "@/utils/list/listFactory";
import { useSimpleList } from "@/hooks/useSimpleList";
import { ArticleModel } from "@/model/article";

const url: Partial<UrlListType> = {
  list: "/article"
};
const { dataSource } = useSimpleList<ArticleModel>(url);
</script>

<template>
  <div class="p-[8px] w-full">
    <el-table :data="dataSource" align="right" header-align="right" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="标题" width="210" />
      <el-table-column prop="content" label="内容" />
    </el-table>
  </div>
</template>

<style scoped></style>
