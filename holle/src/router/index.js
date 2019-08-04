import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../views/home/home'
import Fenlei from '../views/fenlei/fenlei'
import Vip from '../views/vip/vip'
import Shop from '../views/shop/shop'
import My from '../views/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/',
     redirect: '/home'
    }
  ]
})
