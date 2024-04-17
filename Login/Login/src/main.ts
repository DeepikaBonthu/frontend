//import '@primepay/vue3-template-library/dist/vue3-template-library.css'
// import './assets/main.css'
//import SComponentLibrary from '@primepay/vue3-template-library'
import { createApp } from 'vue'
//import { createPinia } from 'pinia'
//import axiosInstance from './plugins/axios'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
 
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(vuetify);
app.use(router);
 
 
app.mount('#app')