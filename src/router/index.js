import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  //base:'/history',
  base: process.env.BASE_URL,
  routes
})

export default router
