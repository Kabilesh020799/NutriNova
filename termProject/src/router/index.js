import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import AppointmentView from '../views/AppoinmentView.vue';
import MedicationView from '../views/MedicationView.vue';
import MentalHealthView from '../views/MentalHealthView.vue';
import NutritionView from '../views/NutritionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:  [
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
    {
      path: '/nutrition',
      name: 'Nutrition',
      component: NutritionView,
    },
    {
      path: '/mental-health',
      name: 'Mental Health',
      component: MentalHealthView,
    },
    {
      path: '/medication',
      name: 'Medication',
      component: MedicationView,
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: AppointmentView,
    }
  ],
})

export default router
