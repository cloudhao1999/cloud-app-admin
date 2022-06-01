import { ref } from "vue";

export type UrlListType = {
  list: string;
  delete: string;
  edit: string;
  add: string;
};

class ListFactory<T, U> {
  dataSource = ref<T[]>([]);
  loading = ref<boolean>(false);
  queryParam = ref<U>();
  url = ref<Partial<UrlListType>>({});
  modalFormRef = ref<any>();
  drawerFormRef = ref<any>();

  constructor(url: Partial<UrlListType>) {
    this.url.value = url;
  }
}

export default ListFactory;
