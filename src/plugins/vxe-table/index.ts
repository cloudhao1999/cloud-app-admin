import "xe-utils";
import { App } from "vue";
import "font-awesome/css/font-awesome.min.css";
import VXETable from "vxe-table";
import zhCNLocat from "vxe-table/lib/locale/lang/zh-CN";
import XEUtils from "xe-utils";

// 全局默认参数
VXETable.setup({
  size: "medium",
  version: 0,
  zIndex: 1002,
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args),
  table: {
    // 自动监听父元素的变化去重新计算表格
    autoResize: true,
    // 鼠标移到行是否要高亮显示
    highlightHoverRow: true
  },
  input: {
    clearable: true
  }
});

export function setupTable(app: App) {
  app.use(VXETable);
}
