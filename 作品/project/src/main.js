import Vue from 'vue';
import App from './App';
import router from './router';
import '@/assets/css/app.css';// 所有css的样式
import iView from 'iview';
import store from './store';
import Vuex from 'vuex';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'iview/dist/styles/iview.css'; //字体库样式

Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  iView,
  Vuex,
  VueAwesomeSwiper,
  store,
  template: '<App/>',
  components: { App }
})
