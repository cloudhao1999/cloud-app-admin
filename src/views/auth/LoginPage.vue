<script setup lang="ts"></script>

<template>
  <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
      <div class="relative sm:max-w-sm w-full">
        <div
          class="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
        ></div>
        <div
          class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
        ></div>
        <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
          <label for="" class="block mt-3 text-2xl text-gray-700 text-center font-semibold">
            登录
          </label>
          <form method="#" action="#" class="mt-10">
            <div>
              <input
                type="email"
                placeholder="请输入账号或邮箱"
                class="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7">
              <input
                type="password"
                placeholder="请输入密码"
                class="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div class="mt-7 flex">
              <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  name="remember"
                />
                <span class="ml-2 text-sm text-gray-600"> 记住我 </span>
              </label>

              <div class="w-full text-right">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                  忘记密码
                </a>
              </div>
            </div>

            <div class="mt-7">
              <button
                class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                登录
              </button>
            </div>

            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md" />
              <label class="block font-medium text-sm text-gray-600 w-full"> 第三方登录 </label>
              <hr class="border-gray-300 border-1 w-full rounded-md" />
            </div>

            <div class="flex mt-7 justify-center w-full">
              <div
                class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                QQ
              </div>

              <div
                class="bg-green-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                微信
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
  background: url("../../assets/img/background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
