<template>
  <div class="container px-6 mx-auto grid mt-10">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Forms
    </h2>
    <!-- General elements -->
    <div
      class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5"
    >
      <label class="block mt-4 text-sm text-left">
        <span class="text-gray-700 dark:text-gray-400"
          >出席する？　欠席する？　それとも か☆く☆め☆い？</span
        >
        <select
          class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
        >
          <option>出席</option>
          <option>欠席</option>
          <option>公欠</option>
        </select>
      </label>

      <label class="block mt-4 text-sm text-left">
        <span class="text-gray-700 dark:text-gray-400">欠席理由</span>
        <textarea
          class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
          rows="3"
          placeholder="向かい風がすごかったから"
        ></textarea>
      </label>
      <div class="flex justify-end mt-3">
        <button
          class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          送信
        </button>
      </div>
    </div>
    <div class="flow-text" id="flowText" :class="{ 'flowing': isFlowing }">{{ selectedText }}</div>
  </div>
</template>
      
  <script>
</script>
      
<style scoped>
main {
  height: calc(100vh - 152px);
  padding: 3% 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: 0;
}
/* Add your CSS rules or selectors here */
</style>