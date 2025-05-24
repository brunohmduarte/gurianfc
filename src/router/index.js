import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/admin',
    component: () => import('../layouts/AdminLayout.vue'),
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
        component: () => import('../views/admin/SeasonPage.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  // Rotas públicas ou fallback
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
