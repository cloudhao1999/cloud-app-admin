import * as veeValidate from "vee-validate";
import rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import yup, { setLocalLocale } from "./yup";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import en from "@vee-validate/i18n/dist/locale/en.json";
import { getLocaleFromStroage } from "@/utils/web";

veeValidate.configure({
  generateMessage: localize({
    en,
    zh_CN
  })
});

setLocalLocale(getLocaleFromStroage());

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key]);
});

const useFields = (fields: string[]) => {
  fields.forEach((field) => veeValidate.useField(field));
};

export default { yup, ...veeValidate, useFields };
