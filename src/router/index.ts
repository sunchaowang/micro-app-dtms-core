import {
  Router,
  getRouter,
  RouteRecordRaw,
  createWebHashHistory,
  useBeforeEach,
  useAfterEach,
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
    path: '/app-:path*',
    name: 'micro-app',
    component: () => import('@/views/micro-app/index.vue'),
  },
];
const router: Router = getRouter({
  history: createWebHashHistory(),
  routes,
});

// before each
useBeforeEach(router);
// after each
useAfterEach(router);

export { router };
