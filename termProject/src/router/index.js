import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      props: { type: 'login' },
      meta: { noNavbar: true },
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
  ]
})

export default router
