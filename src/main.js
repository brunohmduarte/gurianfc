// import of dependencies
import { createApp } from 'vue'

// import of components
import App from './App.vue'
import router from './router'
import store from './store'

// import of another files
import './assets/css/main.css'


createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
