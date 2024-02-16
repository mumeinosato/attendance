  <script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './common/Header.vue'
  import Footer from './common/Footer.vue'
  import 'vuetify/dist/vuetify.min.css'
  </script>

<template>
  <header>
    <Header />
    <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>-->
  </header>
  <RouterView />
  <footer>
    <Footer />
  </footer>
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