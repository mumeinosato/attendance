<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full dark:hidden"
            src="../assets/img/create-account-office.jpeg"
            alt="Office"
          />
          <img
            aria-hidden="true"
            class="hidden object-cover w-full h-full dark:block"
            src="../assets/img/create-account-office-dark.jpeg"
            alt="Office"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1
              class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
              パスワードを設定
            </h1>
            <label class="block text-sm text-left">
              <span class="text-gray-700 dark:text-gray-400">ログインID</span>
              <input
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="j114514"
                v-model="username"
              />
            </label>
            <label class="block mt-4 text-sm text-left">
              <span class="text-gray-700 dark:text-gray-400">パスワード</span>
              <input
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="***************"
                type="password"
                v-model="password"
              />
            </label>
            <label class="block mt-4 text-sm text-left">
              <span class="text-gray-700 dark:text-gray-400"> 確認 </span>
              <input
                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="***************"
                type="password"
                v-model="check_password"
              />
            </label>
            <!-- You should use a button here, as the anchor is only used for the example  -->
            <button
              class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              @click="setPassword"
            >
              登録
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setPassword } from '../script/api';

export default {
  data() {
    return {
      username: "",
      password: "",
      check_password: "",
    };
  },
  methods: {
    async setPassword() {
      if (this.password === this.check_password) {
        const status = await setPassword(this.username, this.password);
        switch (status){
          case 0:
            alert("パスワードを設定しました");
            this.$router.push("/login");
            break;
          case 1:
            alert("ユーザーが存在しません");
            break;
          case 2:
            alert("すでにパスワードが設定されています");
            break;
          default:
            alert("エラーが発生しました");
        }
      } else {
        alert("パスワードが一致しません");
      }
    },
  },
};
</script>