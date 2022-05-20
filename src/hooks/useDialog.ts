import { ElMessageBox } from "element-plus";

export function useDialog(
  msg: string,
  successCallback: (params?: any) => any,
  errCallback: (err: any) => any
) {
  ElMessageBox.confirm(msg)
    .then(() => {
      successCallback();
    })
    .catch((err: Error) => {
      errCallback(err);
    });
}
