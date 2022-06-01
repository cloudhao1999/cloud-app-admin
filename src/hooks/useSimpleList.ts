import { onMounted, toRefs } from "vue";
import { http } from "@/utils/http";
import { useMessage } from "./useMessage";
import { BasicGetResult } from "#/resultType";
import ListFactory, { UrlListType } from "@/utils/list/listFactory";

function useSimpleList<T, U = any>(url: Partial<UrlListType>) {
  const factory = new ListFactory<T, U>(url);
  const { dataSource, loading, queryParam, modalFormRef, drawerFormRef } = toRefs(factory);

  const getQueryParams = () => {
    return queryParam.value;
  };

  const loadData = async <T>(firstPage = false) => {
    if (!url.list) {
      useMessage("error", "请设置url.list属性");
      return;
    }
    if (firstPage) {
      console.log("firstPage");
    }
    const params = getQueryParams();
    try {
      loading.value = true;
      const res = await http.get<U, BasicGetResult<T[]>>(url.list, params);
      dataSource.value = res.data as any;
    } finally {
      loading.value = false;
    }
  };

  const handleAdd = () => {
    modalFormRef.value.add();
    modalFormRef.value.title = "新增";
  };

  const handleEdit = <T>(record: T, title = "编辑") => {
    modalFormRef.value.edit(record);
    modalFormRef.value.title = title;
  };

  const handleAddDrawer = () => {
    drawerFormRef.value.add();
    drawerFormRef.value.title = "新增";
  };

  const handleEditDrawer = <T>(record: T, title = "编辑") => {
    drawerFormRef.value.edit(record);
    drawerFormRef.value.title = title;
  };

  onMounted(async () => {
    await loadData(true);
  });

  return {
    loadData,
    handleAdd,
    handleEdit,
    handleAddDrawer,
    handleEditDrawer,
    dataSource
  };
}

type SimpleListType = ReturnType<typeof useSimpleList>;

export { useSimpleList, type SimpleListType };
