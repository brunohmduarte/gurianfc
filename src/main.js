// import of dependencies
import { createApp } from 'vue'

// import of components
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

// import of another files
import './assets/css/main.css'



createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
