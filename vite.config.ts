import { ConfigEnv, UserConfig } from 'vite';
import { userConfig as baseUserConfig, loadCurrentEnv } from '../../../vite.config.base';
import { wrapperEnv } from '@shared/utils';
import { resolve as pathResolve, join as pathJoin } from 'path';

export default ({ command }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const currentEnv = loadCurrentEnv(command, root);
  const env = wrapperEnv(currentEnv);

  return {
    ...baseUserConfig,
    resolve: Object.assign({}, baseUserConfig.resolve, {
      alias: [
        {
          find: '@/',
          replacement: `${pathResolve('src')}/`,
        },
        {
          find: '@root/',
          replacement: `${pathJoin(__dirname, '..', '..', '/')}`,
        },
        // {
        //   find: '@shared/',
        //   replacement: `${pathJoin(__dirname, '..', '../', 'shared')}/`,
        // },
      ],
    }),
    server: Object.assign({}, baseUserConfig.server, {
      port: env.VITE_APP_PORT,
    }),
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {},
        },
        onwarn: (warning, warn) => {
          if (warning.message.includes('#__PURE__')) {
            return;
          }
          warn(warning);
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      terserOptions: {
        compress: {
          keep_infinity: true,
          // drop_console: true,
        },
      },
    },
  } as UserConfig;
};
