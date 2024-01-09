import { ConfigEnv, UserConfig } from 'vite';
import { userConfig as baseUserConfig, loadCurrentEnv } from '../../vite.config.base';
import { wrapperEnv } from '@shared/utils';
// import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const currentEnv = loadCurrentEnv(command, root);
  const env = wrapperEnv(currentEnv);

  console.log('root', root, env);
  return {
    ...baseUserConfig,
    resolve: Object.assign({}, baseUserConfig.resolve, {
      alias: [
        {
          find: '@/',
          replacement: `src/`,
        },
      ],
    }),
    server: Object.assign({}, baseUserConfig.server, {
      port: 17016,
    }),
  } as UserConfig;
};
