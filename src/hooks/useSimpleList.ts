import { onMounted, reactive, toRefs } from "vue";
import { http } from "@/utils/http";
import { useMessage } from "./useMessage";
import { BasicResult } from "#/resultType";
import ListFactory, { UrlListType } from "@/utils/list/listFactory";
import { useI18n } from "vue-i18n";

/**
 * 接受一个url对象，提供基础的增删改查方法
 * @param url url对象
 * @returns 方法合集
 */
function useSimpleList<T, U = any>(url: Partial<UrlListType>) {
  const factory = new ListFactory<T, U>(url);
  const { t } = useI18n();

  const { dataSource, ipagination, loading, queryParam, ids, modalFormRef, drawerFormRef } = toRefs(
    reactive(factory)
  );

  const getQueryParams = () => {
    return {
      page: ipagination.value.current,
      pageSize: ipagination.value.pageSize,
      ...queryParam.value
    } as unknown as U;
  };

  const loadData = async <T>(firstPage = false) => {
    if (!url.list) {
      useMessage("error", t("page.common.notice.set_url_list"));
      return;
    }
    if (firstPage) {
      ipagination.value.current = 1;
    }
    const params = getQueryParams();
    try {
      loading.value = true;
      const res = await http.get<U, BasicResult<T[]>>(url.list, params);
      dataSource.value = res.data as any;
      ipagination.value.total = Number(res.total!);
    } finally {
      loading.value = false;
    }
  };

  const handleOpenAddDialog = () => {
    modalFormRef.value.edit({});
    modalFormRef.value.title = t("page.common.title.add");
  };

  const handleSearch = (values: any) => {
    queryParam.value = values;
    loadData(true);
  };

  const handleReset = () => {
    queryParam.value = {} as any;
    loadData(true);
  };

  const handleOpenEditDialog = <T>(record: T, title = t("page.common.title.edit")) => {
    modalFormRef.value.edit(record);
    modalFormRef.value.title = title;
  };

  /**
   * 新增表单提交
   * @param params 表单内容
   * @returns 响应信息
   */
  const handleAdd = async (params: T) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!url.add) {
          useMessage("error", t("page.common.notice.set_url_add"));
          return;
        }
        const res = await http.post<T, BasicResult<{ count: number }>>(url.add, {
          data: params
        });
        if (res.code === 200 && res.data.count > 0) {
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    });
  };

  /**
   * 编辑表单提交
   * @param params 表单内容
   * @returns 响应信息
   */
  const handleEdit = async (params: T) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!url.edit) {
          useMessage("error", t("page.common.notice.set_url_edit"));
          return;
        }
        const res = await http.put<T, BasicResult<{ count: number }>>(url.edit, {
          data: params
        });
        if (res.code === 200 && res.data.count > 0) {
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    });
  };

  /**
   * 删除单个数据
   * @param id id
   * @returns 响应信息
   */
  const handleDelete = async (id: number) => {
    if (!url.delete) {
      useMessage("error", t("page.common.notice.set_url_delete"));
      return;
    }
    const res = await http.delete<{}, BasicResult<{ count: number }>>(`${url.delete}/${id}`);
    if (res.code === 200 && res.data.count > 0) {
      useMessage("success", t("page.common.notice.delete_success"));
      loadData(true);
    }
  };

  /**
   * 批量删除
   * @returns 响应内容
   */
  const handleBatchDelete = async () => {
    if (!url.batchDelete) {
      useMessage("error", t("page.common.notice.set_url_batchDelete"));
      return;
    }
    if (ids.value.length === 0) {
      useMessage("error", t("page.common.notice.empty_delete_data"));
      return;
    }
    const res = await http.delete<{ ids: string }, BasicResult<{ count: number }>>(
      url.batchDelete,
      {
        ids: ids.value.join(",")
      }
    );
    if (res.code === 200 && res.data.count > 0) {
      useMessage("success", t("page.common.notice.batchDelete_success"));
      loadData(true);
    }
  };

  /**
   * 打开新增弹窗
   */
  const handleOpenAddDialogDrawer = () => {
    drawerFormRef.value.add();
    drawerFormRef.value.title = t("page.common.title.add");
  };

  /**
   * 打开编辑弹窗
   * @param record 表单内容
   * @param title 标题
   */
  const handleOpenEditDialogDrawer = <T>(record: T, title = t("page.common.title.edit")) => {
    drawerFormRef.value.edit(record);
    drawerFormRef.value.title = title;
  };

  const handleSizeChange = (val: number) => {
    ipagination.value.pageSize = val;
    loadData();
  };

  const handleCurrentChange = (val: number) => {
    ipagination.value.current = val;
    loadData();
  };

  const handleSelectionChange = (val: T[]) => {
    ids.value = unref(val).map((item: any) => item.id);
  };

  onMounted(async () => {
    await loadData(true);
  });

  return {
    loadData,
    handleOpenAddDialog,
    handleOpenEditDialog,
    handleReset,
    handleAdd,
    handleEdit,
    handleDelete,
    handleBatchDelete,
    handleSearch,
    handleOpenAddDialogDrawer,
    handleOpenEditDialogDrawer,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange,
    dataSource,
    ids,
    ipagination,
    modalFormRef,
    loading
  };
}

type SimpleListType = ReturnType<typeof useSimpleList>;

export { useSimpleList, type SimpleListType };
