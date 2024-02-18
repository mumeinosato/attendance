<template>
  <main>
    <h2>{{ title }}</h2>
    
  </main>
</template>
      
  <script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "お知らせ",
    };
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIN,
      userData: (state) => state.userData,
    }),
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