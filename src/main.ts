import './assets/style/main.scss'
import './assets/style/tailwind.scss'
import Alpine from 'alpinejs'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)


app.mount('#app')

window.Alpine = Alpine
Alpine.start()
