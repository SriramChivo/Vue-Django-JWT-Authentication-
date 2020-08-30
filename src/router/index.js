import Vue from 'vue'
import VueRouter from 'vue-router'
import signin from "../components/signin"
import signup from "../components/signup"
import home from "../components/home"
Vue.use(VueRouter)

const routes = [
  {
    name: "signin",
    path: "/signin",
    component: signin
  },
  {
    name: "signup",
    path: "/signup",
    component: signup
  },
  {
    name: "home",
    path: "/",
    component: home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
