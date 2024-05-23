import { createRouter, createWebHistory } from 'vue-router'
import MoviesDetails from '../views/MoviesDetails.vue'
import MoviesView from '../views/MoviesView.vue'
import Carrinho from '../views/Carrinho.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Pesquisa from '../views/Pesquisa.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/movies/:id',
      name: 'moviedetails',
      component: MoviesDetails
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: Carrinho
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/pesquisa',
      name: 'pesquisa',
      component: Pesquisa
    },
    {
      path: '/:pathMatch(.*)*',
     component: NotFound
    }
  ]
})

export default router
