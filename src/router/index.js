import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import list from '@/pages/list/list'
import city from '@/pages/city/city'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //网页显示的路径
      name: 'home',
      component: home
    } , 
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
