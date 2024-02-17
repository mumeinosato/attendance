<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Sidebar from "./common/Sidebar.vue";
import "vuetify/dist/vuetify.min.css"; 

</script>

<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <div
    class="flex h-screen bg-gray-50 dark:bg-gray-900"
    :class="{ 'overflow-hidden': isSideMenuOpen }"
  >
    <!-- Desktop sidebar -->
    <Sidebar />
    <!-- Mobile sidebar -->
    <!-- Backdrop -->
    <!--未作成-->
    <div class="flex flex-col flex-1 w-full">
      <Header />
      <main class="h-full overflow-y-auto ml-64">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>