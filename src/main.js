import Vue from 'vue'
import App from './App.vue'
import {
  router
} from './router/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // router: router,
  store, // store: store,
}).$mount('#app')
