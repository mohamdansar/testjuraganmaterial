import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', //to make single page application works on older browser
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/main-app/Home.vue')
    },
    {
      path: '/upload',
      name: 'Upload',
      component: () => import('../views/main-app/Upload.vue')
    },
    {
      path: '/request',
      name: 'Request',
      component: () => import('../views/main-app/HomeDetail.vue')
    },
    {
      path: '/data-scoring',
      name: 'data-scoring',
      component: () => import('../views/main-app/DataScoring.vue')
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('../views/main-app/Result.vue')
    },
    {
      path: '/hellovue',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue')
    }
  ]
})

export default router
