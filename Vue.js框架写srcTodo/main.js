import Vue from 'vue'
import App from './App'

import './assets/css/base.css'
import './assets/css/index.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: {App: App} // 使用组件前必须注册
})
