import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue';

const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: import('../views/admin/DashboardPage.vue')
      },
      {
        path: 'season',
        name: 'AdminSeason',
        component: () => import('../views/SeasonView.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
