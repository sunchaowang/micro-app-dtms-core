// import { isDevMode } from '@shared/utils/lib/env';

export function getAppConfig() {
  const mode = import.meta.env.MODE; // 环境变量
  // console.log('mode', isDevMode());
  const apps = [
    {
      name: 'base-car',
      developmentUrl: 'http://localhost:17017/',
      productionUrl: ``,
    },
    {
      name: 'base-coal',
      developmentUrl: 'http://localhost:17018/',
      productionUrl: '',
    },
  ];
  return apps.map((app) => {
    return {
      ...app,
      url: mode === 'development' ? app.developmentUrl : app.productionUrl,
      autoLoad: true,
      autoRender: true,
      style: {
        height: '100%',
      },

      events: () => {},
      mounted: () => {
        console.log(`${app.name} mounted`);
      },
      unmounted: () => {
        console.log(`${app.name} unmounted`);
      },
    };
  });
}
