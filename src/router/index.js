import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/App/Form/AppForm.vue'),
    },
    {
      path: '/signup',
      name: 'SignUP',
      component: () => import('../components/App/Form/signUp.vue'),
    },
    {
      path: '/forgetPass',
      name: 'ForgetPassword',
      component: () => import('../components/App/Form/ForgetPassword.vue'),
    },
  ],
})

export default router
