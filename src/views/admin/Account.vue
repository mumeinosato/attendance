<template>
  <div class="container grid px-6 mx-auto">
    <!-- With actions -->
    <h4
      class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 mt-10"
    >
      アカウント管理
    </h4>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <label class="block text-sm text-left">
        <span class="text-gray-700 dark:text-gray-400">ID</span>
        <input
          class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          placeholder="j114514"
          v-model="userid"
        />
        <p class="mt-2"></p>
        <span class="text-gray-700 dark:text-gray-400">名前</span>
        <input
          class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          placeholder="ヨシフ・ベサリオニス・ジュガシヴィリ"
          v-model="username"
        />
      </label>

      <div class="mt-4 text-sm text-left">
        <span class="text-gray-700 dark:text-gray-400">管理者</span>
        <div class="mt-2">
          <label
            class="inline-flex items-center text-gray-600 dark:text-gray-400"
          >
            <input
              type="radio"
              class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              name="adminType"
              value="1"
              v-model="admin"
            />
            <span class="ml-2">はい</span>
          </label>
          <label
            class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400"
          >
            <input
              type="radio"
              class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              name="adminType"
              value="0"
              v-model="admin"
            />
            <span class="ml-2">いいえ</span>
          </label>
        </div>
      </div>
      <div class="mt-4 text-sm text-left">
        <span class="text-gray-700 dark:text-gray-400">部門</span>
        <div class="mt-2">
        <label
          v-for="(groupType, index) in groupTypes"
          :key="index"
          class="inline-flex items-center text-gray-600 dark:text-gray-400"
        >
          <input
            type="checkbox"
            class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            :value="groupType.value"
            v-model="selectedGroups"
          />
          <span class="ml-2">{{ groupType.label }}</span>
        </label>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          @click="createAccount"
        >
          作成
        </button>
      </div>
    </div>

    <div class="w-full overflow-hidden rounded-lg shadow-xs mb-10">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th class="px-4 py-3">名前</th>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">部門</th>
              <th class="px-4 py-3">出席数</th>
              <th class="px-4 py-3">欠席数</th>
              <th class="px-4 py-3">Actions</th>
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
              <td>
                <template v-if="account.group[0] === 't'"
                  >競技プロ</template
                >
                <template v-if="account.group[1] === 't'">
                  <span v-if="account.group[0] === 't'">|</span>
                  アプリ</template
                >
                <template v-if="account.group[2] === 't'">
                  <span
                    v-if="
                      account.group[0] === 't' || account.group[1] === 't'
                    "
                    >|</span
                  >
                  CG</template
                >
                <template v-if="account.group[3] === 't'">
                  <span
                    v-if="
                      account.group[0] === 't' ||
                      account.group[1] === 't' ||
                      account.group[2] === 't'
                    "
                    >|</span
                  >
                  映像</template
                >
                <template v-if="account.group[4] === 't'">
                  <span
                    v-if="
                      account.group[0] === 't' ||
                      account.group[1] === 't' ||
                      account.group[2] === 't' ||
                      account.group[3] === 't'
                    "
                    >|</span
                  >
                  芸術</template
                >
              </td>
              <td class="px-4 py-3">{{ account.attendance }}</td>
              <td class="px-4 py-3">{{ account.absence }}</td>
              <!--<td class="px-4 py-3">
                <div class="flex items-center text-sm">
                   Avatar with inset shadow
                  <div>
                    name
                    <p class="font-semibold">西村　博之</p>
                    adminが1なら表示
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      管理者
                    </p>
                  </div>
                </div>
              </td>
              user
              <td class="px-4 py-3 text-sm">j114514</td>
              attendance
              <td class="px-4 py-3 text-xs">0</td>
              absence
              <td class="px-4 py-3 text-sm">0</td> -->
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { accountList, createUser } from "../../script/api";

export default {
  data() {
    return {
      accounts: [],
      userid: "",
      username: "",
      admin: "0",
      selectedGroups: [],
      groupTypes: [
        { label: "競技プロ", value: "programming" },
        { label: "アプリ", value: "app" },
        { label: "CG", value: "cg" },
        { label: "映像", value: "image" },
        { label: "芸術", value: "art" },
      ],
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
    async createAccount() {
      if(this.userid === "" || this.username === "") {
        alert("IDと名前は必須です");
        return;
      }
      try {
        const selsectString = this.groupTypes.map(groupTypes => {
          return this.selectedGroups.includes(groupTypes.value) ? 't' : 'f';
        }).join('').substring(0, 5);

        console.log(selsectString);

        await createUser(this.userid, this.username, this.admin, selsectString);
        alert("アカウントを作成しました");
        this.userid = "";
        this.username = "";
        this.admin = "0";
        this.selectedGroups = [];
      }catch (error) {
        console.error(error);
      }
    },  
  },
};
</script>