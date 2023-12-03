import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChatView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('../views/AgentView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    }
  ]
})

export default router
