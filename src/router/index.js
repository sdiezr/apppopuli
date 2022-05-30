import Vue from 'vue'
import VueRouter from 'vue-router'
import InicioView from '../views/InicioView.vue'
import InformeView from '../views/InformeView.vue'
import AyudaView from '../views/AyudaView.vue'
import ExplorarView from '../views/ExplorarView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/informe',
    name: 'informe',
    component: InformeView
  },
  {
    path: '/ayuda',
    name: 'ayuda',
    component: AyudaView
  },
  {
    path: '/explorar',
    name: 'explorar',
    component: ExplorarView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
