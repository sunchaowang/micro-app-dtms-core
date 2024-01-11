import { Router, createRouter, createWebHistory } from '@shared/router';

const router: Router = createRouter({
  history: createWebHistory(import.meta?.env?.BASE_URL),
  routes: [
    // home
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    // coal
    {
      path: '/module-:path*',
      name: 'micro-module',
      component: () => import('@/views/micro-module/index.vue'),
    },
  ],
});

export default router;
