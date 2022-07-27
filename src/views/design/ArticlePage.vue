<script setup lang="ts">
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import ArticleEditDialog from "./components/ArticleEditDialog.vue";
import { ArticleModel } from "@/model/article";
import { setupArticleAttributes, articleUrl } from "./modules/design";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const initialValues = {
  title: "",
  content: "",
  type: ""
};

const { articleFilterOptions, articleColumns } = setupArticleAttributes();

const searchParams = ref(initialValues);

const filterOptions = computed(() => {
  return articleFilterOptions.value;
});
const {
  loading,
  dataSource,
  ipagination,
  modalFormRef,
  loadData,
  handleSizeChange,
  handleCurrentChange,
  handleOpenAddDialog,
  handleOpenEditDialog,
  handleDelete,
  handleSearch,
  handleReset
} = useSimpleList<ArticleModel>(articleUrl) as SimpleListType;
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-full">
      <div class="mx-3 mt-5">
        <search-filter
          :model="searchParams"
          :options="filterOptions"
          :show-reset="true"
          @reset="handleReset"
          @search="handleSearch"
        >
          <template #extraButtons>
            <el-button type="primary" icon="plus" @click="handleOpenAddDialog">
              <span>{{ t("page.common.btn.add") }}</span>
            </el-button>
          </template>
        </search-filter>
      </div>
      <c-table
        v-loading="loading"
        :table-data="dataSource"
        :columns="articleColumns"
        align="right"
        header-align="right"
        stripe
        style="width: 100%"
      >
        <template #actions="{ scope }">
          <el-button size="small" @click="handleOpenEditDialog(scope.row)">{{
            t("page.common.btn.edit")
          }}</el-button>
          <el-popconfirm
            :title="t('page.common.btn.delete_popover')"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button size="small" type="danger">{{ t("page.common.btn.delete") }}</el-button>
            </template>
          </el-popconfirm>
        </template>
      </c-table>
      <div class="float-right mt-2">
        <el-pagination
          v-model:currentPage="ipagination.current"
          v-model:page-size="ipagination.pageSize"
          small
          :page-sizes="ipagination.pageSizeOptions"
          :background="true"
          layout="sizes, prev, pager, next"
          :total="ipagination.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <ArticleEditDialog ref="modalFormRef" @close="loadData" />
  </div>
</template>
