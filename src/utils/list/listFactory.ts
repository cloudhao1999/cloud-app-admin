export type UrlListType = {
  list: string;
  delete: string;
  batchDelete: string;
  edit: string;
  add: string;
};

class ListFactory<T, U> {
  dataSource = ref<T[]>([]);
  loading = ref<boolean>(false);
  ids = ref<number[]>([]);
  queryParam = ref<U>();
  url = ref<Partial<UrlListType>>({});
  modalFormRef = ref<any>();
  drawerFormRef = ref<any>();
  ipagination = reactive({
    current: 1,
    total: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50, 100]
  });

  constructor(url: Partial<UrlListType>) {
    this.url.value = url;
  }
}

export default ListFactory;
