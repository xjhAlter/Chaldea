import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/Home'
import User from '@/views/user'
import Servant from '@/views/servant'
import ConceptCard from '@/views/conceptCard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/(index.html)?',
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
    ...ConceptCard
  ]
})

router.afterEach((to, from, next) => {
  // 每次路由跳转后视图都回到顶部
  window.scrollTo(0, 0)
})

export default router
