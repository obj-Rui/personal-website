import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  server: {
    host: true,
    https: false,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://124.71.59.55:3005/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'api'),
      },
    },
  },
});
