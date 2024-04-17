import { createApp } from 'vue'
import vuetify from './plugin/vuetify'
// import '@mdi/font/css/materialdesignicons.css'
 
import App from './App.vue'
import router from './router'
 
const app = createApp(App)
app.use(vuetify);
app.use(router)
// app.use(createPinia())
app.mount('#app')