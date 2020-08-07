import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Api from '../views/Api.vue'
import Faceapi from '../views/Faceapi.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/api',
    name: 'Api',
    component: Api
  },
  {
    path: '/faceapi',
    name: 'Faceapi',
    component: Faceapi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
