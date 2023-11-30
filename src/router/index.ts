import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '@/views/HelloWorld.vue'
import NotFound from '@/views/NotFound.vue'
import DashboardContentVue from '@/components/dashboard/DashboardContent.vue'
import AppLoginVue from '@/views/AppLogin.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: HelloWorldVue },
  {
    path: '/about',
    component: DashboardContentVue
  },
  {
    path: '/login',
    component: AppLoginVue
  },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  return true
})

export default router
