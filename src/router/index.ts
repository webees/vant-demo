import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const originalPush: any = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: any) {
  return originalPush.call(this, location).catch((err: any) => err)
}

Vue.use(VueRouter)

const files = require.context('.', true, /\.ts$/)
const modules: Array<RouteConfig> = []
files.keys().forEach(k => {
  if (k === './index.ts') return
  modules.push(files(k).default)
})

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    meta: {
      title: 'Home'
    },
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
  },
  ...modules
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    to || from
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  to || from
  next()
})

router.afterEach(to => {
  to || 1
  window.scrollTo(0, 0)
})

export default router
