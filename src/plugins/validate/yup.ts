import * as yup from "yup";

export const setLocalLocale = (locale: string) => {
  if (locale === "zh-CN") {
    yup.setLocale({
      mixed: {
        required: "${label}必须输入"
      },
      string: {
        email: "邮箱格式错误"
      }
    });
  } else {
    yup.setLocale({
      mixed: {
        required: "${label} is Required"
      },
      string: {
        email: "Email format is wrong"
      }
    });
  }
};

export default yup;
