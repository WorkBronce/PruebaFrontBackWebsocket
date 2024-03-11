import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Juegos from '../views/Juegos.vue'
import DetalleJuego from '../views/DetalleView.vue'
import Creadores from '../views/CreadoresView.vue'
import DetalleCreador from '../views/DetalleCreador.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/juegos',
    name: 'Juegos',
    component: Juegos
  },
  {
    path: '/detalle/:id', 
    name: 'DetalleJuego',
    component: DetalleJuego
  },
  {
    path: '/creadores',
    name: 'Creadores',
    component: Creadores
  },
  {
    path: '/creadores/:nombre',
    name: 'DetalleCreador',
    component: DetalleCreador
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
