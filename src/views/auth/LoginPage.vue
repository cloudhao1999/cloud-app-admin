<script setup lang="ts">
import v from "@/plugins/validate";
import redirectService from "@/hooks/useRedirect";
import { useMessage } from "@/hooks/useMessage";
import { userStore } from "@/store/user";
import { useRouter } from "vue-router";
import { useTimeFix } from "@/utils/web";
import { useI18n } from "vue-i18n";
import { useLoginPlaceholder } from "./module/login";

const router = useRouter();
const userState = userStore();
const time = useTimeFix();
const { t } = useI18n();
const { yup, useForm, useFields } = v;
const { passwordInputText, mailInputText } = useLoginPlaceholder();

const schema = {
  account: yup
    .string()
    .required()
    .matches(/^\d{11}|.+@.+$/, t("page.common.login.form.schema.email"))
    .label(t("page.common.login.form.schema.label.email")),
  password: yup
    .string()
    .required()
    .min(3, t("page.common.login.form.schema.password"))
    .label(t("page.common.login.form.schema.label.password"))
};

const { handleSubmit, errors, values } = useForm({
  initialValues: {
    account: "",
    password: ""
  },
  validationSchema: schema
});
useFields(Object.keys(schema));

const onSubmit = handleSubmit(async (values: any) => {
  userState.login(
    unref(values),
    () => {
      if (redirectService.redirect.value) {
        router.push({
          name: redirectService.redirect.value
        });
      } else {
        router.push("/dashboard");
      }
      useMessage("success", `${time}，${userState.info!.name}`);
    },
    (err) => {
      useMessage("error", err);
    }
  );
});
</script>

<template>
  <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
      <div class="relative mx-10 sm:max-w-sm w-full">
        <div
          class="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
        ></div>
        <div
          class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
        ></div>
        <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
          <label for="" class="block mt-3 text-2xl text-gray-700 text-center font-semibold">
            {{ t("page.common.login.form.title") }}
          </label>
          <form class="mt-10" @submit.prevent="onSubmit">
            <div class="relative">
              <input
                v-model="values.account"
                :placeholder="mailInputText"
                class="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <VeeValidateError :error="errors.account" />
            </div>

            <div class="mt-7 relative">
              <input
                v-model="values.password"
                type="password"
                :placeholder="passwordInputText"
                class="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <VeeValidateError :error="errors.password" />
            </div>

            <div class="mt-10 flex">
              <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  name="remember"
                />
                <span class="ml-2 text-sm text-gray-600">
                  {{ t("page.common.login.form.checkbox.remember") }}
                </span>
              </label>

              <div class="w-full text-right">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                  {{ t("page.common.login.form.link.forget") }}
                </a>
              </div>
            </div>

            <div class="mt-7">
              <button
                class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                {{ t("page.common.login.form.submit.login") }}
              </button>
            </div>

            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md" />
              <label class="block font-medium text-sm text-gray-600 w-full">
                {{ t("page.common.login.form.link.OAuth") }}
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md" />
            </div>

            <div class="flex mt-7 justify-center w-full">
              <div
                class="mr-5 flex justify-center items-center bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                <i-mdi-qqchat style="font-size: 1em; color: #fff" />
                <span class="ml-1">{{ t("page.common.login.form.link.btn.qq") }}</span>
              </div>
              <div
                class="flex justify-center items-center bg-green-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                <i-mdi-wechat style="font-size: 1.2em; color: #fff" />
                <span class="ml-1">{{ t("page.common.login.form.link.btn.wechat") }}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background: url("../../assets/img/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
