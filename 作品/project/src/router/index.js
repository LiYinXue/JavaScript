import Vue from 'vue'
import Router from 'vue-router'
import boxHtml from '@/components/home'
import loginHtml from '@/components/login'
import registrationHtml from '@/components/registration'
import contentHtml from '@/components/content'
import itemHtml from '@/components/item'
import shopCar from '@/components/shop-car'//购物车属于公用样式

Vue.use(Router)

export default new Router({
  mode:'history', //  html5的history 模式
  routes: [
    {
      path: '/',
      name: 'boxHtml',
      component: boxHtml
    },
    {
      path: '/login',
      name: 'loginHtml',
      component: loginHtml
    },
    {
      path: '/registration',
      name: 'registrationHtml',
      component: registrationHtml
    },
    {
    	path:'/content',
    	name: 'contentHtml',
      component: contentHtml
    },
    {
    	path:'/item',
    	name: 'itemHtml',
      component: itemHtml
    },
    {
    	path:'/shop-car',
    	name: 'shopCar',
      component: shopCar
    }
  ]
})
