const my = {
  path: '/my',
  meta: {
    title: 'my',
    navbar: false,
    tabbar: true
  },
  component: () => import(/* webpackChunkName: "My" */ '@/views/My.vue'),
  children: []
}

export default my
