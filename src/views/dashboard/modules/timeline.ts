import { Collection, Pouring, BrushFilled, Star, Cherry } from "@element-plus/icons-vue";
import { TagColorEnum } from "@/enum/tagsEnum";

export const tagsTypeMap = new Map<string, Array<any>>([
  ["feat", [TagColorEnum.FEAT, BrushFilled]],
  ["fix", [TagColorEnum.FIX, Pouring]],
  ["docs", [TagColorEnum.DOCS, Collection]],
  ["style", [TagColorEnum.STYLE, Star]],
  ["chore", [TagColorEnum.STYLE, Cherry]],
  ["default", [TagColorEnum.FEAT, BrushFilled]]
]);

export type tagsType = "feat" | "fix" | "docs" | "style" | "chore" | "default";
