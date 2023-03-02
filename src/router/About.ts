const about = {
  path: '/about',
  meta: {
    title: 'About',
    navbar: false,
    tabbar: true
  },
  component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue'),
  children: []
}

export default about
