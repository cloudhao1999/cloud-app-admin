import { CTableColumn } from "#/table";
import { ArticleModel } from "@/model/article";
import { UrlListType } from "@/utils/list/listFactory";
import { useI18n } from "vue-i18n";

export const articleUrl: Partial<UrlListType> = {
  list: "/article",
  delete: "/deleteArticle",
  batchDelete: "/batchDeleteArticle",
  edit: "/editArticle",
  add: "/addArticle"
};

export const setupArticleAttributes = () => {
  const { t } = useI18n();

  const articleFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.design.article.search.title"),
        name: "title",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.design.article.search.title_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.design.article.search.content"),
        name: "content",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.design.article.search.content_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.design.article.search.type"),
        name: "type",
        tagName: "async-select",
        props: {
          placeholder: t("page.common.design.article.search.type_placeholder"),
          url: "/article/type",
          size: "default",
          style: {
            width: "100%"
          }
        }
      }
    ];
  });

  const articleColumns = computed<CTableColumn<ArticleModel>[]>(() => {
    return [
      {
        prop: "id",
        label: t("page.common.design.article.column.id"),
        width: "80"
      },
      {
        prop: "title",
        label: t("page.common.design.article.column.title"),
        width: "180"
      },
      {
        prop: "content",
        label: t("page.common.design.article.column.content"),
        showOverflowTooltip: true
      },
      {
        prop: "actions",
        label: t("page.common.design.article.column.action"),
        fixed: "right",
        scoped: "actions",
        width: "150"
      }
    ];
  });

  return {
    articleFilterOptions,
    articleColumns
  };
};
