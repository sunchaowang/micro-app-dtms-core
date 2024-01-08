import { UserConfig } from 'vite';
import { userConfig as baseUserConfig, loadCurrentEnv } from '../../vite.config.base';
import { wrapperEnv } from '@shared/utils';

// https://vitejs.dev/config/
export default ({ command, mode }): UserConfig => {
  const root = process.cwd();

  const currentEnv = loadCurrentEnv(command, root);
  const env = wrapperEnv(currentEnv);

  console.log('root', root, env);
  return {
    ...baseUserConfig,
    resolve: {},
    server: {
      port: env.VITE_APP_PORT,
    },
  } as UserConfig;
};
