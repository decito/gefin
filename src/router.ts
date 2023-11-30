import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from './components/HelloWorld.vue'
import DashboardContentVue from './components/dashboard/DashboardContent.vue'

const routes = [
  { path: '/', component: HelloWorldVue },
  {
    path: '/about',
    component: DashboardContentVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
