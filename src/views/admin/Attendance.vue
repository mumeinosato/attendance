<template>
  <div class="container px-6 mx-auto grid mt-10">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      出席開始
    </h2>
    <!-- General elements -->
    <div
      class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-3 py-3 flex items-center input-form"
    >
      <input
        class="block w-80 mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="受け付ける時間を指定（分）デフォルト２分"
      />
      <div class="flex justify-end mt-1 ml-3">
        <button
          class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          開始
        </button>
      </div>
    </div>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      出席状況
    </h2>
    <div class="w-full overflow-hidden rounded-lg shadow-xs mb-10">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th class="px-4 py-3">名前</th>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">出席情報</th>
              <th class="px-4 py-3 show-th">
                <input
                  class="show-in block dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="2024-08-10"               
                />
              </th>
            </tr>
          </thead>
          <tbody
            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-left"
          >
            <tr
              class="text-gray-700 dark:text-gray-400"
              v-for="account in accounts"
              :key="account.user"
            >
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold">{{ account.name }}</p>
                    <p
                      class="text-xs text-gray-600 dark:text-gray-400"
                      v-if="account.admin === 1"
                    >
                      管理者
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3">{{ account.user }}</td>
              <td class="px-4 py-3">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                  v-if="account.attendance === 1"
                >
                  出席
                </span>
                <span
                  class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"
                  v-else-if="account.attendance === 2"
                >
                  欠席
                </span>
                <span
                  class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-sm"
                  v-else-if="account.attendance === 3"
                >
                  公欠
                </span>
                <span
                  class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"
                  v-else-if="account.attendance === 0"
                >
                  不明
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { accountList } from "../../script/api";

export default {
  data() {
    return {
      accounts: [],
    };
  },
  async created() {
    await this.fetchAccounts();
  },
  methods: {
    async fetchAccounts() {
      try {
        this.accounts = await accountList();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.input-form {
  width: 40%;
  margin: 0 auto;
}
.show-th {
  width: 15%;
  height: 10%;
}
.show-in {
  height: 90%;
}
</style>