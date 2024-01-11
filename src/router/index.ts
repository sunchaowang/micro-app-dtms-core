import { Router, createRouter, createWebHashHistory } from '@shared/router';

const router: Router = createRouter({
  history: createWebHashHistory('/'),
  strict: true,
  scrollBehavior: () => {
    return { top: 0 };
  },
  routes: [
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
    // coal
    {
      path: '/module-:path*',
      name: 'micro-module',
      component: () => import('@/views/micro-module/index.vue'),
    },
  ],
});

console.log(router, 'router');

router.beforeEach((to, from, next) => {
  console.log('router.beforeEach', to, from);
  next();
});

export { router };
