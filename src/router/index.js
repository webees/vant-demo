import Vue from 'vue'
import Router from 'vue-router'

import hello from './hello'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/hello'
  },
  hello
]

// 滚动行为
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      y: 0
    }
  }
}

// 嵌入路由
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  path: '/',
  routes,
  scrollBehavior,
  linkActiveClass: 'active'
})

// 钩子
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
