import { ElementEnum } from "@/enum/elementEnum";
import { ElMessageBox } from "element-plus";

export function useDialog(
  msg: string,
  successCallback: (params?: any) => any,
  errCallback?: (err: any) => any
) {
  ElMessageBox.confirm(msg, undefined, {
    customStyle: {
      width: ElementEnum.ELEMENT_MESSAGE_BOX_SIZE
    }
  })
    .then(() => {
      successCallback();
    })
    .catch((err: Error) => {
      errCallback && errCallback(err);
    });
}
