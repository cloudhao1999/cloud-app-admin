import { useI18n } from "vue-i18n";

export function useLoginPlaceholder() {
  const { t } = useI18n();

  const passwordInputText = computed(() => {
    return t("page.common.login.form.placeholder.password");
  });

  const mailInputText = computed(() => {
    return t("page.common.login.form.placeholder.email");
  });

  return {
    passwordInputText,
    mailInputText
  };
}
