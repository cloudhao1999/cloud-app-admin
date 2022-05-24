import * as veeValidate from "vee-validate";
import rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import yup from "./yup";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";

veeValidate.configure({
  // validateOnInput: true,
  generateMessage: localize("zh_CN", zh_CN)
});

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key]);
});

const useFields = (fields: string[]) => {
  fields.forEach((field) => veeValidate.useField(field));
};

export default { yup, ...veeValidate, useFields };
