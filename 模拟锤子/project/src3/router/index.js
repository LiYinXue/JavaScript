import Vue from 'vue'
import Router from 'vue-router'
import shopList from '@/views/shop-list/shop-list'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'shopList',
      component: shopList
    }
  ]
})
