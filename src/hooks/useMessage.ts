import { ElMessage } from "element-plus";

export function useMessage(type: "success" | "warning" | "info" | "error", message: string) {
  ElMessage({
    message,
    type
  });
}
