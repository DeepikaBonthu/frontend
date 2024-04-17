import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import Table from '../views/Table.vue'
import Todoapp from '@/views/Todoapp.vue'
import Form from '@/views/Form.vue'
import Figma from '@/views/Figma.vue'
import Todovue from '@/views/Todovue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component:MovieView
    },
    {
      path: '/table',
      name: 'table',
      component:Table
    },
    {
      path: '/todoapp',
      name: 'todoapp',
      component:Todoapp
    },
    {
      path: '/form',
      name: 'form',
      component:Form
    },
    {
      path: '/figma',
      name: 'figma',
      component:Figma
    },
    {
      path: '/todovue',
      name: 'todovue',
      component:Todovue
    }
  ]
})

export default router
