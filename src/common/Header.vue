<template>
  <header>
    <div id="app">
      <div class="hamburger" v-if="isMobile">
        <nav>
          <button type="btn" class="nav-btn" v-on:click="open = !open">
            <i class="fas fa-bars" aria-hidden="true"></i>
          </button>
          <div class="nav-items" v-bind:class="{ 'is-active': open }">
            <div class="nav-item">Home</div>
            <div class="nav-item">About</div>
            <div class="nav-item">Topic</div>
          </div>
        </nav>
      </div>

      <div class="pc-menu" v-if="!isMobile">
        <nav>
          <ul class="main-nav">
            <li>
              <router-link to="/"><img src="../assets/logo.svg" /></router-link>
            </li>
            <li><router-link to="/">ホーム</router-link></li>
            <li><router-link to="/schedule">自己紹介</router-link></li>
            <li><router-link to="/group">ブログ</router-link></li>
            <li><router-link to="/group">Discord Bot</router-link></li>
            <li><router-link to="/map">サーバーステータス</router-link></li>
            <li><router-link to="/notice">お問い合わせ</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
    
  <script>
export default {
  data() {
    return {
      title: "ヘッダー",
      isMobile: false,
      drawer: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>
    
    <style scoped>
</style>