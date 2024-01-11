import { ConfigEnv, UserConfig } from 'vite';
import { userConfig as baseUserConfig, loadCurrentEnv, pathResolve } from '../../vite.config.base';
import { wrapperEnv } from '@shared/utils';

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const currentEnv = loadCurrentEnv(command, root);
  const env = wrapperEnv(currentEnv);

  console.log('root', pathResolve('src'), env);
  return {
    ...baseUserConfig,
    resolve: Object.assign({}, baseUserConfig.resolve, {
      alias: [
        {
          find: '@/',
          replacement: `${pathResolve('src')}/`,
        },
      ],
    }),
    server: Object.assign({}, baseUserConfig.server, {
      port: env.VITE_APP_PORT,
    }),
  } as UserConfig;
};
