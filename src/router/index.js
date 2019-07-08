import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PageDefault from '@/layout/default.vue'
import PageBlank from '@/layout/blank'
import GoodsList from '@/page/goodsList.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageDefault',
      component: PageDefault,
      children: [{
        path: '/index',
        alias: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/goods',
        name: 'goods',
        component: GoodsList
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }
      ]
    },
    {
      path: '/blank',
      name: 'PageBlank',
      component: PageBlank,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
