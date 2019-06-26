import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'v-navigation__link--active',
  linkExactActiveClass: 'v-navigation__link--exact-active',
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      meta: { sidebar: true },
      props: { sidebar: true },
      components: {
        default: () => import(/* webpackChunkName: "home" */ '@/views/Home/Index.vue'),
        sidebar: () => import(/* webpackChunkName: "sidebar" */ '@/components/VShippingCart/VShippingCart.vue')
      }
    },
    {
      path: '/photo/:photoId',
      name: 'photo',
      meta: { sidebar: true },
      props: { sidebar: true },
      components: {
        default: () => import(/* webpackChunkName: "photo" */ '@/views/Photo/Index.vue'),
        sidebar: () => import(/* webpackChunkName: "sidebar" */ '@/components/VShippingCart/VShippingCart.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About/Index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact/Index.vue')
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "notFoundComponent" */ '@/views/NotFoundComponent/Index.vue')
    }
  ]
})

export default router
