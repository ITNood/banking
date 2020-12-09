import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/news',
    name: 'news',
    component:()=>import('../views/news')
  },
  {
    path:'/project',
    name:'project',
    component:()=>import('../views/project')
  },
  {
    path:'/join',
    name:'join',
    component:()=>import('../views/join')
  },
  {
    path:'/member',
    name:'mamber',
    component:()=>import('../views/member')
  },
  {
    path: '/memberunit',
    name: 'memberunit',
    component: () => import('../views/memberunit')
  },
  {
    path:'/search',
    name:'search',
    component:()=>import('../views/search')
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router