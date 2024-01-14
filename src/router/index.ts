import {
  Router,
  getRouter,
  RouteRecordRaw,
  useBeforeEach,
  useAfterEach,
  createWebHistory,
  createWebHashHistory,
} from '@shared/router';

const routes: RouteRecordRaw[] = [
  // home
  {
    path: '/',
    redirect() {
      return '/home';
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  // coal
  {
    path: '/base/:path*',
    name: 'micro-app',
    component: () => import('@/views/micro-app/index.vue'),
  },
];
const router: Router = getRouter({
  history: createWebHistory(),
  routes,
});

// before each
useBeforeEach(router);
// after each
useAfterEach(router);

export { router };
