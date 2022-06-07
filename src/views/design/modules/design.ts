import { columnType } from "#/table";

export const articleFilterOptions = [
  {
    label: "标题",
    name: "title",
    tagName: "el-input",
    props: {
      placeholder: "请输入标题",
      maxLength: "24"
    }
  },
  {
    label: "内容",
    name: "content",
    tagName: "el-input",
    props: {
      placeholder: "请输入内容",
      maxLength: "24"
    }
  }
];

export const articleColumns: columnType[] = [
  {
    prop: "id",
    label: "ID",
    width: "80"
  },
  {
    prop: "title",
    label: "标题",
    width: "180"
  },
  {
    prop: "content",
    label: "内容",
    showOverflowTooltip: true
  },
  {
    prop: "actions",
    label: "操作",
    fixed: "right",
    scoped: "actions",
    width: "150"
  }
];
