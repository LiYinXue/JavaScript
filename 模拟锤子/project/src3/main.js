import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/css/app.css' // 所有css的样式

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
