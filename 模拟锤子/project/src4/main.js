import Vue from 'vue'
import App from './App'
import router from './router' // 框架的插件
import store from './store' //vuex 插件  vuex的实例
import '@/assets/css/app.css' // 所有css的样式

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, // 注册
  store,  //注册
  template: '<App/>',
  components: { App }
})
