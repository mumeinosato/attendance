<template>
    <main>
      <h2>{{ title }}</h2>
    </main>
  </template>
      
  <script>
  export default {
    data() {
      return {
        title: "課題",
      };
    },
  };
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
  </style>