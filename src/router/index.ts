import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'início',
      component: HomeView,
      meta: {
        icon: 'home'
      }
    },
    {
      path: '/dues',
      name: 'calendário',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DueView.vue'),
      meta: {
        icon: 'calendar'
      }
    },
    {
      path: '/mvp',
      name: 'visualização antiga',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RemoveView.vue'),
      meta: {
        icon: 'trash'
      }
    }
  ]
})

export default router
