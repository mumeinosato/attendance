import './assets/style/main.scss'
import './assets/style/tailwind.scss'
import './assets/style/tailwind.output.scss'
import Alpine from 'alpinejs'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')

window.Alpine = Alpine
Alpine.start()
