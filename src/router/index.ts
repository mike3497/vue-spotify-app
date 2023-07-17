import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import CallbackView from '@/views/CallbackView.vue';
import LoginView from '@/views/LoginView.vue';
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated && to.name !== 'login' && to.name !== 'callback') {
    return { name: 'login' };
  }
});

export default router;
