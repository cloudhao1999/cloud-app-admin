import { DefineComponent } from "vue";
import { TagColorEnum } from "@/enum/tagsEnum";
import {
  Collection,
  Pouring,
  BrushFilled,
  Star,
  Cherry,
  QuestionFilled
} from "@element-plus/icons-vue";

export const tagsTypeMap = new Map<tagsType, [string, DefineComponent<{}>]>([
  ["feat", [TagColorEnum.FEAT, markRaw(BrushFilled)]],
  ["fix", [TagColorEnum.FIX, markRaw(Pouring)]],
  ["docs", [TagColorEnum.DOCS, markRaw(Collection)]],
  ["style", [TagColorEnum.STYLE, markRaw(Star)]],
  ["chore", [TagColorEnum.STYLE, markRaw(Cherry)]],
  ["unkonw", [TagColorEnum.UNKNOWN, markRaw(QuestionFilled)]]
]);

export type tagsType = "feat" | "fix" | "docs" | "style" | "chore" | "unkonw";
