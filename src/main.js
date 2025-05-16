// import of dependencies
import { createApp } from 'vue'

// import of components
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

// import of another files
import './assets/css/main.css'



createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
