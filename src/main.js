import { createApp } from 'vue'
//import { loadScript } from 'vue-plugin-load-script' // we can use this for notifications

import router from './router'
import store from './store'
import App from './App.vue'

import './CSS/style.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
