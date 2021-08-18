import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Barbeiro from '../views/Barbeiro.vue'
import Cliente from '../views/Cliente.vue'
import Servico from '../views/Servico.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Agenda from '../views/Agenda.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/agenda',
    name: 'Agendas',
    component: Agenda
  },
  {
    path: '/barbeiro',
    name: 'Barbeiros',
    component: Barbeiro
  },
  {
    path: '/cliente',
    name: 'Clientes',
    component: Cliente
  },
  {
    path: '/servico',
    name: 'Serviços',
    component: Servico
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
