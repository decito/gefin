import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '@/views/HelloWorld.vue'
import NotFound from '@/views/NotFound.vue'
import DashboardContentVue from '@/components/dashboard/DashboardContent.vue'
import AppLoginVue from '@/views/AppLogin.vue'

const routes = [
   { name: 'home', path: '/', redirect: '/dashboard' },
   { name: 'dashboard', path: '/dashboard', component: HelloWorldVue },
   {
      name: 'about',
      path: '/about',
      component: DashboardContentVue
   },
   {
      name: 'login',
      path: '/login',
      component: AppLoginVue
   },
   { name: 'not-found', path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   linkExactActiveClass: 'text-foreground'
})

router.beforeEach(() => {
   return true
})

export default router
