import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import Board from '@/components/board.vue'
import Boards from '@/components/boards.vue'
import Korean from '@/components/korean.vue'
import Chinese from '@/components/chinese.vue'
import Japanese from '@/components/japanese.vue'
import Western from '@/components/western.vue'
import Others from '@/components/others.vue'
import ContentDetail from '@/components/ContentDetail'
import Create from '@/components/create.vue'
import * as firebase from 'firebase/app'

Vue.use(VueRouter)
const requireAuth = () => (to, from, next) => {
  if (firebase.auth().currentUser) {
    return next()
  }
  alert('로그인 해주세요')
  next('/login')
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/boards',
    name: 'Boards',
    component: Boards,
    beforeEnter: requireAuth()
  },
  {
    path: '/boards/korean',
    name: 'korean',
    component: Korean,
    beforeEnter: requireAuth()
  },
  {
    path: '/boards/chinese',
    name: 'chinese',
    component: Chinese,
    beforeEnter: requireAuth()
  },
  {
    path: '/boards/japanese',
    name: 'japanese',
    component: Japanese,
    beforeEnter: requireAuth()
  },
  {
    path: '/boards/western',
    name: 'western',
    component: Western,
    beforeEnter: requireAuth()
  },
  {
    path: '/boards/others',
    name: 'others',
    component: Others,
    beforeEnter: requireAuth()
  },
  {
    path: '/boards/detail/:contentId',
    name: 'ContentDetail',
    component: ContentDetail
  },
  {
    path: '/boards/create/:contentId?',
    name: 'Create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
