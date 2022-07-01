import { DefineComponent } from "vue";
import { TagColorEnum } from "@/enum/tagsEnum";
import { Collection, Pouring, BrushFilled, Star, Cherry } from "@element-plus/icons-vue";

export const tagsTypeMap = new Map<tagsType, [string, DefineComponent<{}>]>([
  ["feat", [TagColorEnum.FEAT, BrushFilled]],
  ["fix", [TagColorEnum.FIX, Pouring]],
  ["docs", [TagColorEnum.DOCS, Collection]],
  ["style", [TagColorEnum.STYLE, Star]],
  ["chore", [TagColorEnum.STYLE, Cherry]],
  ["default", [TagColorEnum.FEAT, BrushFilled]]
]);

export type tagsType = "feat" | "fix" | "docs" | "style" | "chore" | "default";
