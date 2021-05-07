import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import OneGoods from '../views/OneGoods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/goods',
    component: Main,
    children: [
      {path: '', component: Home},
      {path: ':id', component:  OneGoods},
      
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
