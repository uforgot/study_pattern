import path from 'path';
import ViteConfigPlugin from './vite.config.plugin'
const config = (env, argv) => {
  const rtn = {
    env, argv, root:'page',
    css: {
      devSourcemap: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: ViteConfigPlugin,
    build: {
      minify: 'esbuild',
      target: 'esnext',
      assetsDir: 'assets',
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {

      }
    }
  }
  return rtn;
}
export default config;