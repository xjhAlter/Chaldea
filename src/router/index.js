import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import User from '@/views/user'
import Servant from '@/views/servant'
import ConceptCard from '@/views/conceptCard'
import CommandCard from '@/views/commandCard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    ...User,
    ...Servant,
    ...ConceptCard,
    ...CommandCard
  ]
})

router.afterEach((to, from, next) => {
  // 每次路由跳转后视图都回到顶部
  window.scrollTo(0, 0)
})

export default router
