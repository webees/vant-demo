const home = {
  path: '/home',
  meta: {
    title: 'Home',
    navbar: false,
    tabbar: true
  },
  component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
  children: []
}

export default home
