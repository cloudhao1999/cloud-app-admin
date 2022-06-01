<script setup lang="ts">
import { UrlListType } from "@/utils/list/listFactory";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import ArticleEditDialogVue from "./modules/ArticleEditDialog.vue";
import { ArticleModel } from "@/model/article";

const url: Partial<UrlListType> = {
  list: "/article",
  delete: "/deleteArticle"
};
const {
  dataSource,
  ipagination,
  modalFormRef,
  handleSizeChange,
  handleCurrentChange,
  handleEdit,
  handleDelete
} = useSimpleList<ArticleModel>(url) as SimpleListType;
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-full">
      <el-table :data="dataSource" align="right" header-align="right" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column prop="content" label="内容" show-overflow-tooltip />
        <el-table-column fixed="right" label="操作" width="150">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm title="确认删除该条记录?" @confirm="handleDelete(scope.row.id)">
              <template #reference>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
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
    <ArticleEditDialogVue ref="modalFormRef" />
  </div>
</template>

<style lang="scss" scoped></style>
