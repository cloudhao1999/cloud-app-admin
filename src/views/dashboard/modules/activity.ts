import { CTableColumn } from "#/table";
import { ActivityModel } from "@/model/activity";
import { useI18n } from "vue-i18n";

export const setupDashobardAttributes = () => {
  const { t } = useI18n();

  const activityColumns = computed<CTableColumn<ActivityModel>[]>(() => {
    return [
      {
        prop: "name",
        show: true,
        label: t("page.common.dashboard.column.leaderboard.name")
      },
      {
        prop: "price",
        sortable: true,
        show: true,
        label: t("page.common.dashboard.column.leaderboard.price"),
        width: "85"
      },
      {
        prop: "category",
        show: true,
        label: t("page.common.dashboard.column.leaderboard.tag"),
        width: "80",
        scoped: "category"
      },
      {
        prop: "sort",
        show: true,
        label: t("page.common.dashboard.column.leaderboard.compared"),
        width: "110",
        scoped: "sort"
      }
    ];
  });

  const activityTableData = [
    {
      name: "可达鸭",
      price: 50,
      unit: "RMB",
      category: "精神系",
      color: "bg-yellow-500",
      sort: "50%",
      sortUnit: "up"
    },
    {
      name: "皮卡丘",
      price: 1000,
      unit: "RMB",
      category: "雷电系",
      color: "bg-yellow-300",
      sort: "120%",
      sortUnit: "up"
    },
    {
      name: "方酱",
      price: 600,
      unit: "RMB",
      category: "草系",
      color: "bg-green-500",
      sort: "50%",
      sortUnit: "down"
    },
    {
      name: "杰尼龟",
      price: 70,
      unit: "RMB",
      category: "水系",
      color: "bg-blue-400",
      sort: "60%",
      sortUnit: "up"
    },
    {
      name: "波克比",
      price: 1900,
      unit: "RMB",
      category: "精神系",
      color: "bg-pink-400",
      sort: "150%",
      sortUnit: "up"
    }
  ];

  return {
    activityTableData,
    activityColumns
  };
};
