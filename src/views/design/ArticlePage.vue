<script setup lang="ts">
import { UrlListType } from "@/utils/list/listFactory";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { ArticleModel } from "@/model/article";

const url: Partial<UrlListType> = {
  list: "/article"
};
const { dataSource, ipagination, handleSizeChange, handleCurrentChange } =
  useSimpleList<ArticleModel>(url) as SimpleListType;
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-full">
      <el-table :data="dataSource" align="right" header-align="right" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="title" label="标题" width="210" />
        <el-table-column prop="content" label="内容" show-overflow-tooltip />
      </el-table>
      <div class="float-right mt-2">
        <el-pagination
          v-model:currentPage="ipagination.current"
          v-model:page-size="ipagination.pageSize"
          :page-sizes="ipagination.pageSizeOptions"
          :background="true"
          layout="sizes, prev, pager, next"
          :total="ipagination.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
