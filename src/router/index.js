import Vue from 'vue'
import VueRouter from 'vue-router'
import InicioView from '../views/InicioView.vue'
import InformeView from '../views/InformeView.vue'
import GraciasView from '../views/GraciasView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
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
    path: '/gracias',
    name: 'gracias',
    component: GraciasView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
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
  // mode: "history",
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
